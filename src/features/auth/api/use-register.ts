import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRouter } from "next/navigation";



type Responsetype = InferResponseType<typeof client.api.auth.register["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>["json"];

export const useRegister = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        Responsetype,
        Error,
        RequestType
    >({
        mutationFn: async (data) => {
            const response = await client.api.auth.register["$post"]({ json: data });

            return await response.json()
        },
        onSuccess: () => {
            router.refresh();
            queryClient.invalidateQueries({ queryKey: ["current"] });
        }
    });

    return mutation;
}