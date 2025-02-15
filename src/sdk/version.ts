/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as z from "zod";

export class Version extends ClientSDK {
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
     * Check version of kdbai
     */
    async get(options?: RequestOptions): Promise<string> {
        const path$ = this.templateURLComponent("/api/v1/version")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "text/plain",
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
            operationID: "getVersion",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<string>()
            .text(200, z.string())
            .fail(["4XX", "5XX"])
            .match(response);

        return result$;
    }
}
