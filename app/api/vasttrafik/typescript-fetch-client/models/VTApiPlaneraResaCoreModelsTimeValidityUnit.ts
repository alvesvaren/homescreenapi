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


/**
 * 
 * @export
 */
export const VTApiPlaneraResaCoreModelsTimeValidityUnit = {
    Unknown: 'unknown',
    Minutes: 'minutes',
    Hours: 'hours',
    Days: 'days',
    Year: 'year',
    Semester: 'semester',
    Schoolyear: 'schoolyear',
    Unlimited: 'unlimited'
} as const;
export type VTApiPlaneraResaCoreModelsTimeValidityUnit = typeof VTApiPlaneraResaCoreModelsTimeValidityUnit[keyof typeof VTApiPlaneraResaCoreModelsTimeValidityUnit];


export function VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSON(json: any): VTApiPlaneraResaCoreModelsTimeValidityUnit {
    return VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSONTyped(json, false);
}

export function VTApiPlaneraResaCoreModelsTimeValidityUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaCoreModelsTimeValidityUnit {
    return json as VTApiPlaneraResaCoreModelsTimeValidityUnit;
}

export function VTApiPlaneraResaCoreModelsTimeValidityUnitToJSON(value?: VTApiPlaneraResaCoreModelsTimeValidityUnit | null): any {
    return value as any;
}

