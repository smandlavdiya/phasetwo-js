/* tslint:disable */
/* eslint-disable */
/**
 * Phase Two Admin REST API
 * This is a REST API reference for the Phase Two Keycloak custom resources. These are extensions to the standard [Keycloak Admin REST API](https://www.keycloak.org/docs-api/17.0/rest-api/index.html).  ### Base URI format Paths specified in the documentation are relative to the the base URI. - Format: `https://<host>:<port>/auth/realms` - Example: `https://app.phasetwo.io/auth/realms`  ### Authentication Authentication is achieved by using the `Authentication: Bearer <token>` header in all requests. This is either the access token received from a normal authentication, or by a request directly to the OpenID Connect token endpoint.  It is recommended that you use a Keycloak Admin Client, such as [this one for Javascript](https://github.com/keycloak/keycloak-nodejs-admin-client), as they take care of authetication, getting an access token, and refreshing it when it expires.  #### Client credentials grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=client_credentials&client_id=admin-cli&client_secret=fd649804-3a74-4d69-acaa-8f065c6b7da1 ```  #### Password grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=password&username=uname@foo.com&password=pwd123AZY&client_id=admin-cli ``` 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RealmAttributeRepresentation,
} from '../models';
import {
    RealmAttributeRepresentationFromJSON,
    RealmAttributeRepresentationToJSON,
} from '../models';

export interface CreateRealmAttributeRequest {
    realm: string;
    realmAttributeRepresentation: RealmAttributeRepresentation;
}

export interface DeleteRealmAttributeRequest {
    realm: string;
    attributeKey: string;
}

export interface GetRealmAttributeByKeyRequest {
    realm: string;
    attributeKey: string;
}

export interface GetRealmAttributesRequest {
    realm: string;
}

export interface UpdateRealmAttributeByKeyRequest {
    realm: string;
    attributeKey: string;
    realmAttributeRepresentation: RealmAttributeRepresentation;
}

/**
 * 
 */
export class AttributesApi extends runtime.BaseAPI {

    /**
     * Create a new realm attribute
     */
    async createRealmAttributeRaw(requestParameters: CreateRealmAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.realm === null || requestParameters.realm === undefined) {
            throw new runtime.RequiredError('realm','Required parameter requestParameters.realm was null or undefined when calling createRealmAttribute.');
        }

        if (requestParameters.realmAttributeRepresentation === null || requestParameters.realmAttributeRepresentation === undefined) {
            throw new runtime.RequiredError('realmAttributeRepresentation','Required parameter requestParameters.realmAttributeRepresentation was null or undefined when calling createRealmAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("access_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{realm}/attributes`.replace(`{${"realm"}}`, encodeURIComponent(String(requestParameters.realm))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RealmAttributeRepresentationToJSON(requestParameters.realmAttributeRepresentation),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a new realm attribute
     */
    async createRealmAttribute(requestParameters: CreateRealmAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createRealmAttributeRaw(requestParameters, initOverrides);
    }

    /**
     * Delete the realm attribute
     */
    async deleteRealmAttributeRaw(requestParameters: DeleteRealmAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.realm === null || requestParameters.realm === undefined) {
            throw new runtime.RequiredError('realm','Required parameter requestParameters.realm was null or undefined when calling deleteRealmAttribute.');
        }

        if (requestParameters.attributeKey === null || requestParameters.attributeKey === undefined) {
            throw new runtime.RequiredError('attributeKey','Required parameter requestParameters.attributeKey was null or undefined when calling deleteRealmAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("access_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{realm}/attributes/{attributeKey}`.replace(`{${"realm"}}`, encodeURIComponent(String(requestParameters.realm))).replace(`{${"attributeKey"}}`, encodeURIComponent(String(requestParameters.attributeKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the realm attribute
     */
    async deleteRealmAttribute(requestParameters: DeleteRealmAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRealmAttributeRaw(requestParameters, initOverrides);
    }

    /**
     * Get realm attribute by key
     */
    async getRealmAttributeByKeyRaw(requestParameters: GetRealmAttributeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RealmAttributeRepresentation>> {
        if (requestParameters.realm === null || requestParameters.realm === undefined) {
            throw new runtime.RequiredError('realm','Required parameter requestParameters.realm was null or undefined when calling getRealmAttributeByKey.');
        }

        if (requestParameters.attributeKey === null || requestParameters.attributeKey === undefined) {
            throw new runtime.RequiredError('attributeKey','Required parameter requestParameters.attributeKey was null or undefined when calling getRealmAttributeByKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("access_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{realm}/attributes/{attributeKey}`.replace(`{${"realm"}}`, encodeURIComponent(String(requestParameters.realm))).replace(`{${"attributeKey"}}`, encodeURIComponent(String(requestParameters.attributeKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RealmAttributeRepresentationFromJSON(jsonValue));
    }

    /**
     * Get realm attribute by key
     */
    async getRealmAttributeByKey(requestParameters: GetRealmAttributeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RealmAttributeRepresentation> {
        const response = await this.getRealmAttributeByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of attributes for this realm
     * Get realm attributes
     */
    async getRealmAttributesRaw(requestParameters: GetRealmAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: RealmAttributeRepresentation; }>>> {
        if (requestParameters.realm === null || requestParameters.realm === undefined) {
            throw new runtime.RequiredError('realm','Required parameter requestParameters.realm was null or undefined when calling getRealmAttributes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("access_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{realm}/attributes`.replace(`{${"realm"}}`, encodeURIComponent(String(requestParameters.realm))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get a list of attributes for this realm
     * Get realm attributes
     */
    async getRealmAttributes(requestParameters: GetRealmAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: RealmAttributeRepresentation; }>> {
        const response = await this.getRealmAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update realm attribute by key
     */
    async updateRealmAttributeByKeyRaw(requestParameters: UpdateRealmAttributeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.realm === null || requestParameters.realm === undefined) {
            throw new runtime.RequiredError('realm','Required parameter requestParameters.realm was null or undefined when calling updateRealmAttributeByKey.');
        }

        if (requestParameters.attributeKey === null || requestParameters.attributeKey === undefined) {
            throw new runtime.RequiredError('attributeKey','Required parameter requestParameters.attributeKey was null or undefined when calling updateRealmAttributeByKey.');
        }

        if (requestParameters.realmAttributeRepresentation === null || requestParameters.realmAttributeRepresentation === undefined) {
            throw new runtime.RequiredError('realmAttributeRepresentation','Required parameter requestParameters.realmAttributeRepresentation was null or undefined when calling updateRealmAttributeByKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("access_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/{realm}/attributes/{attributeKey}`.replace(`{${"realm"}}`, encodeURIComponent(String(requestParameters.realm))).replace(`{${"attributeKey"}}`, encodeURIComponent(String(requestParameters.attributeKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RealmAttributeRepresentationToJSON(requestParameters.realmAttributeRepresentation),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update realm attribute by key
     */
    async updateRealmAttributeByKey(requestParameters: UpdateRealmAttributeByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRealmAttributeByKeyRaw(requestParameters, initOverrides);
    }

}