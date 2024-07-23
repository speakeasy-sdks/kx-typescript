/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Table not found
 */
export type KdbAiTableDeleteAiTablesResponseBodyData = {};

/**
 * Table not found
 */
export class KdbAiTableDeleteAiTablesResponseBody extends Error {
    /** The original data that was passed to this error instance. */
    data$: KdbAiTableDeleteAiTablesResponseBodyData;

    constructor(err: KdbAiTableDeleteAiTablesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.name = "KdbAiTableDeleteAiTablesResponseBody";
    }
}

/**
 * Failed to clean up data from table.
 */
export type KdbAiTableDeleteResponseBodyData = {};

/**
 * Failed to clean up data from table.
 */
export class KdbAiTableDeleteResponseBody extends Error {
    /** The original data that was passed to this error instance. */
    data$: KdbAiTableDeleteResponseBodyData;

    constructor(err: KdbAiTableDeleteResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.name = "KdbAiTableDeleteResponseBody";
    }
}

/** @internal */
export const KdbAiTableDeleteAiTablesResponseBody$inboundSchema: z.ZodType<
    KdbAiTableDeleteAiTablesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({}).transform(() => {
    return new KdbAiTableDeleteAiTablesResponseBody();
});

/** @internal */
export type KdbAiTableDeleteAiTablesResponseBody$Outbound = {};

/** @internal */
export const KdbAiTableDeleteAiTablesResponseBody$outboundSchema: z.ZodType<
    KdbAiTableDeleteAiTablesResponseBody$Outbound,
    z.ZodTypeDef,
    KdbAiTableDeleteAiTablesResponseBody
> = z.instanceof(KdbAiTableDeleteAiTablesResponseBody).transform((v) => v.data$);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KdbAiTableDeleteAiTablesResponseBody$ {
    /** @deprecated use `KdbAiTableDeleteAiTablesResponseBody$inboundSchema` instead. */
    export const inboundSchema = KdbAiTableDeleteAiTablesResponseBody$inboundSchema;
    /** @deprecated use `KdbAiTableDeleteAiTablesResponseBody$outboundSchema` instead. */
    export const outboundSchema = KdbAiTableDeleteAiTablesResponseBody$outboundSchema;
    /** @deprecated use `KdbAiTableDeleteAiTablesResponseBody$Outbound` instead. */
    export type Outbound = KdbAiTableDeleteAiTablesResponseBody$Outbound;
}

/** @internal */
export const KdbAiTableDeleteResponseBody$inboundSchema: z.ZodType<
    KdbAiTableDeleteResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({}).transform(() => {
    return new KdbAiTableDeleteResponseBody();
});

/** @internal */
export type KdbAiTableDeleteResponseBody$Outbound = {};

/** @internal */
export const KdbAiTableDeleteResponseBody$outboundSchema: z.ZodType<
    KdbAiTableDeleteResponseBody$Outbound,
    z.ZodTypeDef,
    KdbAiTableDeleteResponseBody
> = z.instanceof(KdbAiTableDeleteResponseBody).transform((v) => v.data$);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KdbAiTableDeleteResponseBody$ {
    /** @deprecated use `KdbAiTableDeleteResponseBody$inboundSchema` instead. */
    export const inboundSchema = KdbAiTableDeleteResponseBody$inboundSchema;
    /** @deprecated use `KdbAiTableDeleteResponseBody$outboundSchema` instead. */
    export const outboundSchema = KdbAiTableDeleteResponseBody$outboundSchema;
    /** @deprecated use `KdbAiTableDeleteResponseBody$Outbound` instead. */
    export type Outbound = KdbAiTableDeleteResponseBody$Outbound;
}
