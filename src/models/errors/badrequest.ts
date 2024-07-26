/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Bad Request
 */
export type BadRequestData = {
    description: string;
};

/**
 * Bad Request
 */
export class BadRequest extends Error {
    description: string;

    /** The original data that was passed to this error instance. */
    data$: BadRequestData;

    constructor(err: BadRequestData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.description = err.description;

        this.name = "BadRequest";
    }
}

/** @internal */
export const BadRequest$inboundSchema: z.ZodType<BadRequest, z.ZodTypeDef, unknown> = z
    .object({
        description: z.string().default("Bad Request"),
    })
    .transform((v) => {
        return new BadRequest(v);
    });

/** @internal */
export type BadRequest$Outbound = {
    description: string;
};

/** @internal */
export const BadRequest$outboundSchema: z.ZodType<BadRequest$Outbound, z.ZodTypeDef, BadRequest> = z
    .instanceof(BadRequest)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            description: z.string().default("Bad Request"),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequest$ {
    /** @deprecated use `BadRequest$inboundSchema` instead. */
    export const inboundSchema = BadRequest$inboundSchema;
    /** @deprecated use `BadRequest$outboundSchema` instead. */
    export const outboundSchema = BadRequest$outboundSchema;
    /** @deprecated use `BadRequest$Outbound` instead. */
    export type Outbound = BadRequest$Outbound;
}
