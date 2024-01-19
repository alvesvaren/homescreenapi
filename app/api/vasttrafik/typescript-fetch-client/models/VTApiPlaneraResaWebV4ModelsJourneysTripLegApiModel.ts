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
import type { VTApiPlaneraResaCoreModelsNote } from './VTApiPlaneraResaCoreModelsNote';
import {
    VTApiPlaneraResaCoreModelsNoteFromJSON,
    VTApiPlaneraResaCoreModelsNoteFromJSONTyped,
    VTApiPlaneraResaCoreModelsNoteToJSON,
} from './VTApiPlaneraResaCoreModelsNote';
import type { VTApiPlaneraResaWebV4ModelsJourneysCallApiModel } from './VTApiPlaneraResaWebV4ModelsJourneysCallApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneysCallApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysCallApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneysCallApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneysCallApiModel';
import type { VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel } from './VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel';
import {
    VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel';
import type { VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel } from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';
import {
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSONTyped,
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelToJSON,
} from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';

/**
 * Information about a journey trip leg.
 * @export
 * @interface VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
 */
export interface VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel {
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysCallApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    origin: VTApiPlaneraResaWebV4ModelsJourneysCallApiModel;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysCallApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    destination: VTApiPlaneraResaWebV4ModelsJourneysCallApiModel;
    /**
     * Flag indicating if the trip leg is cancelled.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    isCancelled: boolean;
    /**
     * Flag indicating if the trip leg is partially cancelled.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    isPartCancelled?: boolean;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    serviceJourney?: VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel;
    /**
     * An ordered list (most important first) of notes related to the trip leg.
     * @type {Array<VTApiPlaneraResaCoreModelsNote>}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    notes?: Array<VTApiPlaneraResaCoreModelsNote> | null;
    /**
     * Estimated distance in meters. Only for transport mode Walk.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    estimatedDistanceInMeters?: number | null;
    /**
     * The planned (according to timetable) connecting time in minutes relative to
     * the previous public transport trip leg (if any).
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    plannedConnectingTimeInMinutes?: number | null;
    /**
     * The estimated (according to real-time data) connecting time in minutes relative to
     * the previous public transport trip leg (if any).
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    estimatedConnectingTimeInMinutes?: number | null;
    /**
     * Flag indicating that there is less than 5 minutes margin between arriving at the
     * origin stop point and the departure from that stop point.
     * @type {boolean}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    isRiskOfMissingConnection?: boolean | null;
    /**
     * The planned departure time in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    plannedDepartureTime?: string | null;
    /**
     * The planned arrival time in RFC 3339 format.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    plannedArrivalTime?: string | null;
    /**
     * The planned duration in minutes.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    plannedDurationInMinutes?: number | null;
    /**
     * The estimated departure time in RFC 3339 format, if available.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    estimatedDepartureTime?: string | null;
    /**
     * The estimated arrival time in RFC 3339 format, if available.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    estimatedArrivalTime?: string | null;
    /**
     * The estimated duration in minutes, if available.
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    estimatedDurationInMinutes?: number | null;
    /**
     * The best known time of the arrival in RFC 3339 format. Is EstimatedArrivalTime if exists, otherwise PlannedArrivalTime.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    readonly estimatedOtherwisePlannedArrivalTime?: string | null;
    /**
     * The best known time of the departure in RFC 3339 format. Is EstimatedDepartureTime if exists, otherwise PlannedDepartureTime.
     * @type {string}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    readonly estimatedOtherwisePlannedDepartureTime?: string | null;
    /**
     * 
     * @type {VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    occupancy?: VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel;
    /**
     * Index of Leg in Journey
     * @type {number}
     * @memberof VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
     */
    journeyLegIndex?: number;
}

/**
 * Check if a given object implements the VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel interface.
 */
export function instanceOfVTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "origin" in value;
    isInstance = isInstance && "destination" in value;
    isInstance = isInstance && "isCancelled" in value;

    return isInstance;
}

export function VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModelFromJSON(json: any): VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel {
    return VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModelFromJSONTyped(json, false);
}

export function VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'origin': VTApiPlaneraResaWebV4ModelsJourneysCallApiModelFromJSON(json['origin']),
        'destination': VTApiPlaneraResaWebV4ModelsJourneysCallApiModelFromJSON(json['destination']),
        'isCancelled': json['isCancelled'],
        'isPartCancelled': !exists(json, 'isPartCancelled') ? undefined : json['isPartCancelled'],
        'serviceJourney': !exists(json, 'serviceJourney') ? undefined : VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModelFromJSON(json['serviceJourney']),
        'notes': !exists(json, 'notes') ? undefined : (json['notes'] === null ? null : (json['notes'] as Array<any>).map(VTApiPlaneraResaCoreModelsNoteFromJSON)),
        'estimatedDistanceInMeters': !exists(json, 'estimatedDistanceInMeters') ? undefined : json['estimatedDistanceInMeters'],
        'plannedConnectingTimeInMinutes': !exists(json, 'plannedConnectingTimeInMinutes') ? undefined : json['plannedConnectingTimeInMinutes'],
        'estimatedConnectingTimeInMinutes': !exists(json, 'estimatedConnectingTimeInMinutes') ? undefined : json['estimatedConnectingTimeInMinutes'],
        'isRiskOfMissingConnection': !exists(json, 'isRiskOfMissingConnection') ? undefined : json['isRiskOfMissingConnection'],
        'plannedDepartureTime': !exists(json, 'plannedDepartureTime') ? undefined : json['plannedDepartureTime'],
        'plannedArrivalTime': !exists(json, 'plannedArrivalTime') ? undefined : json['plannedArrivalTime'],
        'plannedDurationInMinutes': !exists(json, 'plannedDurationInMinutes') ? undefined : json['plannedDurationInMinutes'],
        'estimatedDepartureTime': !exists(json, 'estimatedDepartureTime') ? undefined : json['estimatedDepartureTime'],
        'estimatedArrivalTime': !exists(json, 'estimatedArrivalTime') ? undefined : json['estimatedArrivalTime'],
        'estimatedDurationInMinutes': !exists(json, 'estimatedDurationInMinutes') ? undefined : json['estimatedDurationInMinutes'],
        'estimatedOtherwisePlannedArrivalTime': !exists(json, 'estimatedOtherwisePlannedArrivalTime') ? undefined : json['estimatedOtherwisePlannedArrivalTime'],
        'estimatedOtherwisePlannedDepartureTime': !exists(json, 'estimatedOtherwisePlannedDepartureTime') ? undefined : json['estimatedOtherwisePlannedDepartureTime'],
        'occupancy': !exists(json, 'occupancy') ? undefined : VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelFromJSON(json['occupancy']),
        'journeyLegIndex': !exists(json, 'journeyLegIndex') ? undefined : json['journeyLegIndex'],
    };
}

export function VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModelToJSON(value?: VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'origin': VTApiPlaneraResaWebV4ModelsJourneysCallApiModelToJSON(value.origin),
        'destination': VTApiPlaneraResaWebV4ModelsJourneysCallApiModelToJSON(value.destination),
        'isCancelled': value.isCancelled,
        'isPartCancelled': value.isPartCancelled,
        'serviceJourney': VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModelToJSON(value.serviceJourney),
        'notes': value.notes === undefined ? undefined : (value.notes === null ? null : (value.notes as Array<any>).map(VTApiPlaneraResaCoreModelsNoteToJSON)),
        'estimatedDistanceInMeters': value.estimatedDistanceInMeters,
        'plannedConnectingTimeInMinutes': value.plannedConnectingTimeInMinutes,
        'estimatedConnectingTimeInMinutes': value.estimatedConnectingTimeInMinutes,
        'isRiskOfMissingConnection': value.isRiskOfMissingConnection,
        'plannedDepartureTime': value.plannedDepartureTime,
        'plannedArrivalTime': value.plannedArrivalTime,
        'plannedDurationInMinutes': value.plannedDurationInMinutes,
        'estimatedDepartureTime': value.estimatedDepartureTime,
        'estimatedArrivalTime': value.estimatedArrivalTime,
        'estimatedDurationInMinutes': value.estimatedDurationInMinutes,
        'occupancy': VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModelToJSON(value.occupancy),
        'journeyLegIndex': value.journeyLegIndex,
    };
}

