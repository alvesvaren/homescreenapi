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
export const VTApiPlaneraResaCoreModelsTravellerCategory = {
    Unknown: 'unknown',
    Adult: 'adult',
    Youth: 'youth'
} as const;
export type VTApiPlaneraResaCoreModelsTravellerCategory = typeof VTApiPlaneraResaCoreModelsTravellerCategory[keyof typeof VTApiPlaneraResaCoreModelsTravellerCategory];


export function VTApiPlaneraResaCoreModelsTravellerCategoryFromJSON(json: any): VTApiPlaneraResaCoreModelsTravellerCategory {
    return VTApiPlaneraResaCoreModelsTravellerCategoryFromJSONTyped(json, false);
}

export function VTApiPlaneraResaCoreModelsTravellerCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaCoreModelsTravellerCategory {
    return json as VTApiPlaneraResaCoreModelsTravellerCategory;
}

export function VTApiPlaneraResaCoreModelsTravellerCategoryToJSON(value?: VTApiPlaneraResaCoreModelsTravellerCategory | null): any {
    return value as any;
}

