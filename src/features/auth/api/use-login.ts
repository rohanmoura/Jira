import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";



type Responsetype = InferResponseType<typeof client.api.auth.login["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.login["$post"]>["json"];

export const useLogin = () => {
    const mutation = useMutation<
        Responsetype,
        Error,
        RequestType
    >({
        mutationFn: async (data) => {
            const response = await client.api.auth.login["$post"]({ json: data });

            return await response.json();
        }
    });

    return mutation;
}