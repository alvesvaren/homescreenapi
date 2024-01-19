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
import type { VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel } from './VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel';
import type { VTApiPlaneraResaWebV4ModelsPaginationLinks } from './VTApiPlaneraResaWebV4ModelsPaginationLinks';
import {
    VTApiPlaneraResaWebV4ModelsPaginationLinksFromJSON,
    VTApiPlaneraResaWebV4ModelsPaginationLinksFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsPaginationLinksToJSON,
} from './VTApiPlaneraResaWebV4ModelsPaginationLinks';
import type { VTApiPlaneraResaWebV4ModelsPaginationProperties } from './VTApiPlaneraResaWebV4ModelsPaginationProperties';
import {
    VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSON,
    VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsPaginationPropertiesToJSON,
} from './VTApiPlaneraResaWebV4ModelsPaginationProperties';

/**
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
 */
export interface VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse {
    /**
     * The results.
     * @type {Array<VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel>}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
     */
    results?: Array<VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel> | null;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsPaginationProperties}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
     */
    pagination?: VTApiPlaneraResaWebV4ModelsPaginationProperties;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsPaginationLinks}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
     */
    links?: VTApiPlaneraResaWebV4ModelsPaginationLinks;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse {
    return VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : (json['results'] === null ? null : (json['results'] as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelFromJSON)),
        'pagination': !exists(json, 'pagination') ? undefined : VTApiPlaneraResaWebV4ModelsPaginationPropertiesFromJSON(json['pagination']),
        'links': !exists(json, 'links') ? undefined : VTApiPlaneraResaWebV4ModelsPaginationLinksFromJSON(json['links']),
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results === undefined ? undefined : (value.results === null ? null : (value.results as Array<any>).map(VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelToJSON)),
        'pagination': VTApiPlaneraResaWebV4ModelsPaginationPropertiesToJSON(value.pagination),
        'links': VTApiPlaneraResaWebV4ModelsPaginationLinksToJSON(value.links),
    };
}

