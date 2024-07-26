/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export enum QueryAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export class Data extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Perform query to get data from a table
     */
    async query(
        request: components.CanonicalQuery,
        options?: RequestOptions & { acceptHeaderOverride?: QueryAcceptEnum }
    ): Promise<operations.KdbAiQueryResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CanonicalQuery$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/api/v1/data")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept:
                options?.acceptHeaderOverride ||
                "application/json;q=1, application/octet-stream;q=0",
        });

        let security$;
        if (typeof this.options$.apiKeyAuth === "function") {
            security$ = { apiKeyAuth: await this.options$.apiKeyAuth() };
        } else if (this.options$.apiKeyAuth) {
            security$ = { apiKeyAuth: this.options$.apiKeyAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "kdb.ai.query",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "403", "404", "429", "4XX", "500", "503", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.KdbAiQueryResponse>()
            .stream(200, operations.KdbAiQueryResponse$inboundSchema)
            .json(200, operations.KdbAiQueryResponse$inboundSchema)
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(429, errors.TooManyRequests$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .json(503, errors.ServiceUnavailable$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
