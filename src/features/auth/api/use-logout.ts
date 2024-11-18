import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";



type Responsetype = InferResponseType<typeof client.api.auth.logout["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.logout["$post"]>;

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        Responsetype,
        Error
    >({
        mutationFn: async (data) => {
            const response = await client.api.auth.logout["$post"]();

            return await response.json();
        },
        onSuccess: () => {
            router.refresh();
            toast.success("Logout Successful 💗");
            queryClient.invalidateQueries({ queryKey: ["current"] });
        }
    });

    return mutation;
} 