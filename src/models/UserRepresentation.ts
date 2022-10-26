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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserRepresentation
 */
export interface UserRepresentation {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserRepresentation
     */
    attributes?: { [key: string]: any; };
    /**
     * 
     * @type {number}
     * @memberof UserRepresentation
     */
    createdTimestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserRepresentation
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserRepresentation
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    firstName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRepresentation
     */
    groups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRepresentation
     */
    username?: string;
}

/**
 * Check if a given object implements the UserRepresentation interface.
 */
export function instanceOfUserRepresentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserRepresentationFromJSON(json: any): UserRepresentation {
    return UserRepresentationFromJSONTyped(json, false);
}

export function UserRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'createdTimestamp': !exists(json, 'createdTimestamp') ? undefined : json['createdTimestamp'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emailVerified': !exists(json, 'emailVerified') ? undefined : json['emailVerified'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function UserRepresentationToJSON(value?: UserRepresentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'createdTimestamp': value.createdTimestamp,
        'email': value.email,
        'emailVerified': value.emailVerified,
        'enabled': value.enabled,
        'firstName': value.firstName,
        'groups': value.groups,
        'id': value.id,
        'lastName': value.lastName,
        'username': value.username,
    };
}
