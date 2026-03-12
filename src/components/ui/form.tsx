"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
    title: z
        .string()
        .min(5, "El titulo debe tener al menos 5 caracteres.")
        .max(50, "El titulo debe tener al maximo 50 caracteres."),
    description: z
        .string()
        .min(20, "La descripcion debe tener al menos 20 caracteres.")
        .max(100, "La descripcion debe tener al maximo 100 caracteres."),
    color: z
        .string()
        .min(2, "Debes seleccionar un color para el proyecto."),
})

const colors = [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#a855f7",
]

export function ProjectForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            color: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })

        console.log(data);
        
    }

    return (
        <div>

                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Nombre del Proyecto
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Crear una aplicacion de lista de tareas"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="description"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Decripcion
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="Primero diseñar la base de datos.."
                                            rows={6}
                                            className="min-h-24 resize-none"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="color"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-color">
                                        Elige el color del proyecto
                                    </FieldLabel>
                                    <div className="flex items-center gap-2">
                                        {colors.map((color) => (
                                            <Button
                                                key={color}
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                className="rounded"
                                                style={{ backgroundColor: color }}
                                                onClick={() => field.onChange(color)}
                                            />
                                        ))}
                                    </div>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Borrar
                    </Button>
                    <Button type="submit" form="form-rhf-demo">
                        Aceptar
                    </Button>
                </Field>
        </div>
        
    )
}
