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
 * 
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel {
    /**
     * The 16-digit Västtrafik gid of the tariff zone.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel
     */
    gid?: string | null;
    /**
     * The name of the tariff zone.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel
     */
    name?: string | null;
    /**
     * The tariff zone number.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel
     */
    number?: number;
    /**
     * The short name of the tariff zone.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel
     */
    shortName?: string | null;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gid': !exists(json, 'gid') ? undefined : json['gid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gid': value.gid,
        'name': value.name,
        'number': value.number,
        'shortName': value.shortName,
    };
}

