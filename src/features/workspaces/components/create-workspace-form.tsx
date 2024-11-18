"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { createWorkspaceSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DottedSpearator from "@/components/dotted-separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";


interface CreateWorkspaceFormProps {
    onCancel?: () => void;
}


export const CreateWorkspaceForm: FC<CreateWorkspaceFormProps> = ({ onCancel }) => {

    const { mutate: createWorkspace, isPending } = useCreateWorkspace();

    const form = useForm<z.infer<typeof createWorkspaceSchema>>({
        resolver: zodResolver(createWorkspaceSchema),
        defaultValues: {
            name: "",
        }
    })
    

    const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
        createWorkspace({ name: values.name });
        console.log(values);

    }



    return (
        <Card className='w-full h-full border-none shadow-none'>
            <CardHeader className='flex p-7'>
                <CardTitle className="text-xl font-bold">
                    Create a new workspace 😀
                </CardTitle>
            </CardHeader>
            <div className='px-7'>
                <DottedSpearator />
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4">
                            <FormField name='name' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Workspace Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter Workspace Name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <DottedSpearator className="py-7" />
                        <div className="flex items-center justify-between">
                            <Button type="button" size={"lg"} disabled={isPending} variant={"secondary"} onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button type="submit" size={"lg"} disabled={isPending}>
                                Create Workspace
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )

}