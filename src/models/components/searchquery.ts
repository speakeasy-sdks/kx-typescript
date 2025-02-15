/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SearchQuery = {
    /**
     * Table name
     */
    table: string;
    /**
     * List of vectors to do similarity search with.
     */
    vectors: Array<Array<number>>;
    /**
     * Number of results to return.
     */
    n?: number | undefined;
    /**
     * Name of the distance column to be added to the result table. If not set, __nn_distance will be used.
     */
    distances?: string | undefined;
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
     * Columns to be sorted ascending, post query execution
     */
    sortCols?: Array<string> | undefined;
    /**
     * (hnsw use only) Nodes considered when searching
     */
    efSearch?: number | undefined;
    /**
     * (ivf/ivfpq use only) The number of clusters to be traversed when searching
     */
    clusters?: number | undefined;
};

/** @internal */
export const SearchQuery$inboundSchema: z.ZodType<SearchQuery, z.ZodTypeDef, unknown> = z.object({
    table: z.string(),
    vectors: z.array(z.array(z.number())),
    n: z.number().default(5),
    distances: z.string().optional(),
    filter: z.array(z.array(z.string())).optional(),
    groupBy: z.array(z.string()).optional(),
    agg: z.array(z.array(z.string())).optional(),
    sortCols: z.array(z.string()).optional(),
    efSearch: z.number().default(8),
    clusters: z.number().default(8),
});

/** @internal */
export type SearchQuery$Outbound = {
    table: string;
    vectors: Array<Array<number>>;
    n: number;
    distances?: string | undefined;
    filter?: Array<Array<string>> | undefined;
    groupBy?: Array<string> | undefined;
    agg?: Array<Array<string>> | undefined;
    sortCols?: Array<string> | undefined;
    efSearch: number;
    clusters: number;
};

/** @internal */
export const SearchQuery$outboundSchema: z.ZodType<
    SearchQuery$Outbound,
    z.ZodTypeDef,
    SearchQuery
> = z.object({
    table: z.string(),
    vectors: z.array(z.array(z.number())),
    n: z.number().default(5),
    distances: z.string().optional(),
    filter: z.array(z.array(z.string())).optional(),
    groupBy: z.array(z.string()).optional(),
    agg: z.array(z.array(z.string())).optional(),
    sortCols: z.array(z.string()).optional(),
    efSearch: z.number().default(8),
    clusters: z.number().default(8),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchQuery$ {
    /** @deprecated use `SearchQuery$inboundSchema` instead. */
    export const inboundSchema = SearchQuery$inboundSchema;
    /** @deprecated use `SearchQuery$outboundSchema` instead. */
    export const outboundSchema = SearchQuery$outboundSchema;
    /** @deprecated use `SearchQuery$Outbound` instead. */
    export type Outbound = SearchQuery$Outbound;
}
