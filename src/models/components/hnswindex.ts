/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    DistanceMetric,
    DistanceMetric$inboundSchema,
    DistanceMetric$outboundSchema,
} from "./distancemetric.js";
import * as z from "zod";

/**
 * Type of the index.
 */
export const HNSWIndexType = {
    Hnsw: "hnsw",
} as const;
/**
 * Type of the index.
 */
export type HNSWIndexType = ClosedEnum<typeof HNSWIndexType>;

export type HNSWIndex = {
    /**
     * Type of the index.
     */
    type: HNSWIndexType;
    /**
     * Distance metric.
     */
    metric: DistanceMetric;
    /**
     * Number of dimensions.
     */
    dims: number;
    /**
     * Entry points explored during construction.
     */
    efConstruction?: number | undefined;
    /**
     * Number of connections per vertex.
     */
    m?: number | undefined;
};

/** @internal */
export const HNSWIndexType$inboundSchema: z.ZodNativeEnum<typeof HNSWIndexType> =
    z.nativeEnum(HNSWIndexType);

/** @internal */
export const HNSWIndexType$outboundSchema: z.ZodNativeEnum<typeof HNSWIndexType> =
    HNSWIndexType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HNSWIndexType$ {
    /** @deprecated use `HNSWIndexType$inboundSchema` instead. */
    export const inboundSchema = HNSWIndexType$inboundSchema;
    /** @deprecated use `HNSWIndexType$outboundSchema` instead. */
    export const outboundSchema = HNSWIndexType$outboundSchema;
}

/** @internal */
export const HNSWIndex$inboundSchema: z.ZodType<HNSWIndex, z.ZodTypeDef, unknown> = z
    .object({
        type: HNSWIndexType$inboundSchema,
        metric: DistanceMetric$inboundSchema,
        dims: z.number().int(),
        efConstruction: z.number().int().optional(),
        M: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            M: "m",
        });
    });

/** @internal */
export type HNSWIndex$Outbound = {
    type: string;
    metric: string;
    dims: number;
    efConstruction?: number | undefined;
    M?: number | undefined;
};

/** @internal */
export const HNSWIndex$outboundSchema: z.ZodType<HNSWIndex$Outbound, z.ZodTypeDef, HNSWIndex> = z
    .object({
        type: HNSWIndexType$outboundSchema,
        metric: DistanceMetric$outboundSchema,
        dims: z.number().int(),
        efConstruction: z.number().int().optional(),
        m: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            m: "M",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HNSWIndex$ {
    /** @deprecated use `HNSWIndex$inboundSchema` instead. */
    export const inboundSchema = HNSWIndex$inboundSchema;
    /** @deprecated use `HNSWIndex$outboundSchema` instead. */
    export const outboundSchema = HNSWIndex$outboundSchema;
    /** @deprecated use `HNSWIndex$Outbound` instead. */
    export type Outbound = HNSWIndex$Outbound;
}
