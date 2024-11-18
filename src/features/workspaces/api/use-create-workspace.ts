import { client } from "@/lib/rpc"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono"
import { useRouter } from "next/navigation";
import { toast } from "sonner";


type Responsetype = InferResponseType<typeof client.api.workspaces["$post"]>;
type RequestType = InferRequestType<typeof client.api.workspaces["$post"]>["json"];

export const useCreateWorkspace = () => {

    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation<
        Responsetype,
        Error,
        RequestType
    >({
        mutationFn: async (data) => {
            const response = await client.api.workspaces.$post({ json: data });

            return await response.json();
        },
        onSuccess: () => {
            toast.success("Workspace created successfully 💗");
            queryClient.invalidateQueries({ queryKey: ["workspaces"] });
        },
        onError: () => {
            toast.error("Something went wrong 😭");
        }
    })

    return mutation;
}