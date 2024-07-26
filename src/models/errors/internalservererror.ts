/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Internal Server Error
 */
export type InternalServerErrorData = {
    description?: any | undefined;
};

/**
 * Internal Server Error
 */
export class InternalServerError extends Error {
    description?: any | undefined;

    /** The original data that was passed to this error instance. */
    data$: InternalServerErrorData;

    constructor(err: InternalServerErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.description != null) {
            this.description = err.description;
        }

        this.name = "InternalServerError";
    }
}

/** @internal */
export const InternalServerError$inboundSchema: z.ZodType<
    InternalServerError,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        description: z.any().optional(),
    })
    .transform((v) => {
        return new InternalServerError(v);
    });

/** @internal */
export type InternalServerError$Outbound = {
    description?: any | undefined;
};

/** @internal */
export const InternalServerError$outboundSchema: z.ZodType<
    InternalServerError$Outbound,
    z.ZodTypeDef,
    InternalServerError
> = z
    .instanceof(InternalServerError)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            description: z.any().optional(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerError$ {
    /** @deprecated use `InternalServerError$inboundSchema` instead. */
    export const inboundSchema = InternalServerError$inboundSchema;
    /** @deprecated use `InternalServerError$outboundSchema` instead. */
    export const outboundSchema = InternalServerError$outboundSchema;
    /** @deprecated use `InternalServerError$Outbound` instead. */
    export type Outbound = InternalServerError$Outbound;
}
