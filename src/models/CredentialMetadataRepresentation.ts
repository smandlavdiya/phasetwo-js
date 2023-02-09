/* tslint:disable */
/* eslint-disable */
/**
 * Keycloak Account API
 * Derived from the code at https://github.com/keycloak/keycloak/blob/main/services/src/main/java/org/keycloak/services/resources/account/AccountRestService.java 
 *
 * The version of the OpenAPI document: 20.0.3
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
 * @interface CredentialMetadataRepresentation
 */
export interface CredentialMetadataRepresentation {
    /**
     * 
     * @type {string}
     * @memberof CredentialMetadataRepresentation
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CredentialMetadataRepresentation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CredentialMetadataRepresentation
     */
    userLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof CredentialMetadataRepresentation
     */
    createDate?: string;
    /**
     * 
     * @type {object}
     * @memberof CredentialMetadataRepresentation
     */
    credentialData?: object;
}

/**
 * Check if a given object implements the CredentialMetadataRepresentation interface.
 */
export function instanceOfCredentialMetadataRepresentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CredentialMetadataRepresentationFromJSON(json: any): CredentialMetadataRepresentation {
    return CredentialMetadataRepresentationFromJSONTyped(json, false);
}

export function CredentialMetadataRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialMetadataRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'userLabel': !exists(json, 'userLabel') ? undefined : json['userLabel'],
        'createDate': !exists(json, 'createDate') ? undefined : json['createDate'],
        'credentialData': !exists(json, 'credentialData') ? undefined : json['credentialData'],
    };
}

export function CredentialMetadataRepresentationToJSON(value?: CredentialMetadataRepresentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'userLabel': value.userLabel,
        'createDate': value.createDate,
        'credentialData': value.credentialData,
    };
}
