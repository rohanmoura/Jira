import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";



type Responsetype = InferResponseType<typeof client.api.auth.logout["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.logout["$post"]>;

export const useLogout = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        Responsetype,
        Error
    >({
        mutationFn: async (data) => {
            const response = await client.api.auth.logout["$post"]();

            return await response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["current"] });
        }
    });

    return mutation;
}