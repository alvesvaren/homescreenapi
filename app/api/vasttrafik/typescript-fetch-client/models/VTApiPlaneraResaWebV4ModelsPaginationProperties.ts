/* tslint:disable */
/* eslint-disable */
/**
 * Planera Resa
 * Sök och planera resor med Västtrafik
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Pagination information.
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsPaginationProperties
 */
export interface VTApiPlaneraResaWebV4ModelsPaginationProperties {
    /**
     * The requested number of results.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsPaginationProperties
     */
    limit?: number;
    /**
     * The requested offset in the results array.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsPaginationProperties
     */
    offset?: number;
    /**
     * The actual number of returned results.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsPaginationProperties
     */
    size?: number;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsPaginationProperties interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsPaginationProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSON(json: any): VTApiPlaneraResaWebV4ModelsPaginationProperties {
    return VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsPaginationProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function VTApiPlaneraResaWebV4ModelsPaginationPropertiesToJSON(value?: VTApiPlaneraResaWebV4ModelsPaginationProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
        'size': value.size,
    };
}
