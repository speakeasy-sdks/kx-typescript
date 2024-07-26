/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CanonicalQuery = {
    /**
     * Table name
     */
    table: string;
    /**
     * List of triples describing the filter of the form comparison operator, column, values for comparison.
     */
    filter?: Array<Array<string>> | undefined;
    /**
     * A list of column names to group by
     */
    groupBy?: Array<string> | undefined;
    /**
     * List of symbol tuples defining the aggregations to perform
     */
    agg?: Array<Array<string>> | undefined;
    /**
     * Symbol describing the fill method to use
     */
    fill?: string | undefined;
    /**
     * Temporality to apply to the query
     */
    temporality?: string | undefined;
    /**
     * Columns to be sorted ascending, post query execution
     */
    sortCols?: Array<string> | undefined;
};

/** @internal */
export const CanonicalQuery$inboundSchema: z.ZodType<CanonicalQuery, z.ZodTypeDef, unknown> =
    z.object({
        table: z.string(),
        filter: z.array(z.array(z.string())).optional(),
        groupBy: z.array(z.string()).optional(),
        agg: z.array(z.array(z.string())).optional(),
        fill: z.string().optional(),
        temporality: z.string().optional(),
        sortCols: z.array(z.string()).optional(),
    });

/** @internal */
export type CanonicalQuery$Outbound = {
    table: string;
    filter?: Array<Array<string>> | undefined;
    groupBy?: Array<string> | undefined;
    agg?: Array<Array<string>> | undefined;
    fill?: string | undefined;
    temporality?: string | undefined;
    sortCols?: Array<string> | undefined;
};

/** @internal */
export const CanonicalQuery$outboundSchema: z.ZodType<
    CanonicalQuery$Outbound,
    z.ZodTypeDef,
    CanonicalQuery
> = z.object({
    table: z.string(),
    filter: z.array(z.array(z.string())).optional(),
    groupBy: z.array(z.string()).optional(),
    agg: z.array(z.array(z.string())).optional(),
    fill: z.string().optional(),
    temporality: z.string().optional(),
    sortCols: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CanonicalQuery$ {
    /** @deprecated use `CanonicalQuery$inboundSchema` instead. */
    export const inboundSchema = CanonicalQuery$inboundSchema;
    /** @deprecated use `CanonicalQuery$outboundSchema` instead. */
    export const outboundSchema = CanonicalQuery$outboundSchema;
    /** @deprecated use `CanonicalQuery$Outbound` instead. */
    export type Outbound = CanonicalQuery$Outbound;
}
