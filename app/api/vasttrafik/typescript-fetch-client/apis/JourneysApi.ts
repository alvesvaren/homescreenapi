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


import * as runtime from '../runtime';
import type {
  MicrosoftAspNetCoreMvcProblemDetails,
  VTApiPlaneraResaCoreModelsDateTimeRelatesToType,
  VTApiPlaneraResaCoreModelsTravellerCategory,
  VTApiPlaneraResaWebV4ModelsApiError,
  VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType,
  VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel,
  VTApiPlaneraResaWebV4ModelsJourneyTransportMode,
  VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode,
  VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse,
  VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel,
  VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel,
} from '../models/index';
import {
    MicrosoftAspNetCoreMvcProblemDetailsFromJSON,
    MicrosoftAspNetCoreMvcProblemDetailsToJSON,
    VTApiPlaneraResaCoreModelsDateTimeRelatesToTypeFromJSON,
    VTApiPlaneraResaCoreModelsDateTimeRelatesToTypeToJSON,
    VTApiPlaneraResaCoreModelsTravellerCategoryFromJSON,
    VTApiPlaneraResaCoreModelsTravellerCategoryToJSON,
    VTApiPlaneraResaWebV4ModelsApiErrorFromJSON,
    VTApiPlaneraResaWebV4ModelsApiErrorToJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeTypeFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeTypeToJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModelToJSON,
    VTApiPlaneraResaWebV4ModelsJourneyTransportModeFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyTransportModeToJSON,
    VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneyTransportSubModeToJSON,
    VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseToJSON,
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelToJSON,
    VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModelFromJSON,
    VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModelToJSON,
} from '../models/index';

export interface JourneysDetailsReferenceDetailsGetRequest {
    detailsReference: string;
    includes?: Array<VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType>;
    channelIds?: Array<number>;
    productTypes?: Array<number>;
    travellerCategories?: Array<VTApiPlaneraResaCoreModelsTravellerCategory>;
}

export interface JourneysGetRequest {
    originGid?: string;
    originName?: string;
    originLatitude?: number;
    originLongitude?: number;
    destinationGid?: string;
    destinationName?: string;
    destinationLatitude?: number;
    destinationLongitude?: number;
    dateTime?: Date;
    dateTimeRelatesTo?: VTApiPlaneraResaCoreModelsDateTimeRelatesToType;
    paginationReference?: string;
    limit?: number;
    transportModes?: Array<VTApiPlaneraResaWebV4ModelsJourneyTransportMode>;
    transportSubModes?: Array<VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode>;
    onlyDirectConnections?: boolean;
    includeNearbyStopAreas?: boolean;
    viaGid?: number;
    originWalk?: string;
    destWalk?: string;
    originBike?: string;
    destBike?: string;
    totalBike?: string;
    originCar?: string;
    destCar?: string;
    originPark?: string;
    destPark?: string;
    interchangeDurationInMinutes?: number;
    includeOccupancy?: boolean;
}

export interface JourneysReconstructGetRequest {
    ref: string;
    includeOccupancy?: boolean;
}

/**
 * 
 */
export class JourneysApi extends runtime.BaseAPI {

    /**
     * Sample request:        GET /journeys/{detailsReference}/details?includes=ticketsuggestions
     * Returns details about a journey.
     */
    async journeysDetailsReferenceDetailsGetRaw(requestParameters: JourneysDetailsReferenceDetailsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel>> {
        if (requestParameters.detailsReference === null || requestParameters.detailsReference === undefined) {
            throw new runtime.RequiredError('detailsReference','Required parameter requestParameters.detailsReference was null or undefined when calling journeysDetailsReferenceDetailsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.includes) {
            queryParameters['includes'] = requestParameters.includes;
        }

        if (requestParameters.channelIds) {
            queryParameters['channelIds'] = requestParameters.channelIds;
        }

        if (requestParameters.productTypes) {
            queryParameters['productTypes'] = requestParameters.productTypes;
        }

        if (requestParameters.travellerCategories) {
            queryParameters['travellerCategories'] = requestParameters.travellerCategories;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth", []);
        }

        const response = await this.request({
            path: `/journeys/{detailsReference}/details`.replace(`{${"detailsReference"}}`, encodeURIComponent(String(requestParameters.detailsReference))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModelFromJSON(jsonValue));
    }

    /**
     * Sample request:        GET /journeys/{detailsReference}/details?includes=ticketsuggestions
     * Returns details about a journey.
     */
    async journeysDetailsReferenceDetailsGet(requestParameters: JourneysDetailsReferenceDetailsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel> {
        const response = await this.journeysDetailsReferenceDetailsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For an origin or destination to be valid, either a gid or a combination of latitude and longitude must be specified. OriginName and destinationName are optional in combination with latitude and longitude.    Sample request:        GET /journeys?originGid=9021014001760000&destinationGid=9021014003980000    or        GET /journeys?originName=Sadelsten,+V%C3%A5rg%C3%A5rda&originLongitude=12.63308&originLatitude=58.028237&destinationLongitude=11.930897&destinationLatitude=57.586085&destinationName=%C3%85sdammsstigen,+427+36+Billdal
     * Returns journeys matching the specified search parameters.
     */
    async journeysGetRaw(requestParameters: JourneysGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse>> {
        const queryParameters: any = {};

        if (requestParameters.originGid !== undefined) {
            queryParameters['originGid'] = requestParameters.originGid;
        }

        if (requestParameters.originName !== undefined) {
            queryParameters['originName'] = requestParameters.originName;
        }

        if (requestParameters.originLatitude !== undefined) {
            queryParameters['originLatitude'] = requestParameters.originLatitude;
        }

        if (requestParameters.originLongitude !== undefined) {
            queryParameters['originLongitude'] = requestParameters.originLongitude;
        }

        if (requestParameters.destinationGid !== undefined) {
            queryParameters['destinationGid'] = requestParameters.destinationGid;
        }

        if (requestParameters.destinationName !== undefined) {
            queryParameters['destinationName'] = requestParameters.destinationName;
        }

        if (requestParameters.destinationLatitude !== undefined) {
            queryParameters['destinationLatitude'] = requestParameters.destinationLatitude;
        }

        if (requestParameters.destinationLongitude !== undefined) {
            queryParameters['destinationLongitude'] = requestParameters.destinationLongitude;
        }

        if (requestParameters.dateTime !== undefined) {
            queryParameters['dateTime'] = (requestParameters.dateTime as any).toISOString();
        }

        if (requestParameters.dateTimeRelatesTo !== undefined) {
            queryParameters['dateTimeRelatesTo'] = requestParameters.dateTimeRelatesTo;
        }

        if (requestParameters.paginationReference !== undefined) {
            queryParameters['paginationReference'] = requestParameters.paginationReference;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.transportModes) {
            queryParameters['transportModes'] = requestParameters.transportModes;
        }

        if (requestParameters.transportSubModes) {
            queryParameters['transportSubModes'] = requestParameters.transportSubModes;
        }

        if (requestParameters.onlyDirectConnections !== undefined) {
            queryParameters['onlyDirectConnections'] = requestParameters.onlyDirectConnections;
        }

        if (requestParameters.includeNearbyStopAreas !== undefined) {
            queryParameters['includeNearbyStopAreas'] = requestParameters.includeNearbyStopAreas;
        }

        if (requestParameters.viaGid !== undefined) {
            queryParameters['viaGid'] = requestParameters.viaGid;
        }

        if (requestParameters.originWalk !== undefined) {
            queryParameters['originWalk'] = requestParameters.originWalk;
        }

        if (requestParameters.destWalk !== undefined) {
            queryParameters['destWalk'] = requestParameters.destWalk;
        }

        if (requestParameters.originBike !== undefined) {
            queryParameters['originBike'] = requestParameters.originBike;
        }

        if (requestParameters.destBike !== undefined) {
            queryParameters['destBike'] = requestParameters.destBike;
        }

        if (requestParameters.totalBike !== undefined) {
            queryParameters['totalBike'] = requestParameters.totalBike;
        }

        if (requestParameters.originCar !== undefined) {
            queryParameters['originCar'] = requestParameters.originCar;
        }

        if (requestParameters.destCar !== undefined) {
            queryParameters['destCar'] = requestParameters.destCar;
        }

        if (requestParameters.originPark !== undefined) {
            queryParameters['originPark'] = requestParameters.originPark;
        }

        if (requestParameters.destPark !== undefined) {
            queryParameters['destPark'] = requestParameters.destPark;
        }

        if (requestParameters.interchangeDurationInMinutes !== undefined) {
            queryParameters['interchangeDurationInMinutes'] = requestParameters.interchangeDurationInMinutes;
        }

        if (requestParameters.includeOccupancy !== undefined) {
            queryParameters['includeOccupancy'] = requestParameters.includeOccupancy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth", []);
        }

        const response = await this.request({
            path: `/journeys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponseFromJSON(jsonValue));
    }

    /**
     * For an origin or destination to be valid, either a gid or a combination of latitude and longitude must be specified. OriginName and destinationName are optional in combination with latitude and longitude.    Sample request:        GET /journeys?originGid=9021014001760000&destinationGid=9021014003980000    or        GET /journeys?originName=Sadelsten,+V%C3%A5rg%C3%A5rda&originLongitude=12.63308&originLatitude=58.028237&destinationLongitude=11.930897&destinationLatitude=57.586085&destinationName=%C3%85sdammsstigen,+427+36+Billdal
     * Returns journeys matching the specified search parameters.
     */
    async journeysGet(requestParameters: JourneysGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse> {
        const response = await this.journeysGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sample request:        GET /journeys/reconstruct?ref=¶HKI¶T$A=1@O=Brunnsparken, Göteborg@L=1760003@a=128@$A=1@O=Korsvägen, Göteborg@L=3980004@a=128@$202206131358$202206131406$Spå    4$$1$$$$$$¶KRCC¶#VE#1#
     * Reconstructs a journey based on the given reconstruction reference, received from the search journeys query.
     */
    async journeysReconstructGetRaw(requestParameters: JourneysReconstructGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel>> {
        if (requestParameters.ref === null || requestParameters.ref === undefined) {
            throw new runtime.RequiredError('ref','Required parameter requestParameters.ref was null or undefined when calling journeysReconstructGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.ref !== undefined) {
            queryParameters['ref'] = requestParameters.ref;
        }

        if (requestParameters.includeOccupancy !== undefined) {
            queryParameters['includeOccupancy'] = requestParameters.includeOccupancy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth", []);
        }

        const response = await this.request({
            path: `/journeys/reconstruct`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModelFromJSON(jsonValue));
    }

    /**
     * Sample request:        GET /journeys/reconstruct?ref=¶HKI¶T$A=1@O=Brunnsparken, Göteborg@L=1760003@a=128@$A=1@O=Korsvägen, Göteborg@L=3980004@a=128@$202206131358$202206131406$Spå    4$$1$$$$$$¶KRCC¶#VE#1#
     * Reconstructs a journey based on the given reconstruction reference, received from the search journeys query.
     */
    async journeysReconstructGet(requestParameters: JourneysReconstructGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel> {
        const response = await this.journeysReconstructGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a time interval for when journey data is available.
     */
    async journeysValidTimeIntervalGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth", []);
        }

        const response = await this.request({
            path: `/journeys/valid-time-interval`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModelFromJSON(jsonValue));
    }

    /**
     * Returns a time interval for when journey data is available.
     */
    async journeysValidTimeIntervalGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel> {
        const response = await this.journeysValidTimeIntervalGetRaw(initOverrides);
        return await response.value();
    }

}
