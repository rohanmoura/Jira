import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";



type Responsetype = InferResponseType<typeof client.api.auth.register["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>["json"];

export const useRegister = () => {
    const mutation = useMutation<
        Responsetype,
        Error,
        RequestType
    >({
        mutationFn: async (data) => {
            const response = await client.api.auth.register["$post"]({ json: data });

            return await response.json()
        }
    });

    return mutation;
}