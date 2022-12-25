// Appery.io models
export interface $aio_empty_object {};
//
export interface IUserInfo_0 {
    "firstName": string,
    "zipCode": string,
    "id": number,
    "organizationId": number,
    "address2": string,
    "stateId": number,
    "phoneNumber": string,
    "city": string,
    "lastName": string,
    "countryId": number,
    "email": string,
    "address1": string
}
export interface IOrganizationInfo_toDelete {
    "organizationId": number,
    "lastName": string,
    "branchId": number,
    "organizationName": string,
    "firstName": string,
    "branchName": string
}
export interface User {
    "name": string
}
export interface userr {
    "email": string,
    "lastName": string,
    "firstName": string,
    "phoneNumber": string,
    "city": string,
    "stateId": number,
    "zipCode": string,
    "countryId": number,
    "id": number,
    "organizationId": number,
    "address2": string,
    "address1": string
}
export interface IOrganizationInfo_toDelete_1 {
    "organizationName": string,
    "branchId": number,
    "organizationId": number,
    "lastName": string,
    "branchName": string,
    "firstName": string
}
export interface User_0 {
    "name": string
}
interface __IOrganizationInfo_0_sub_002 {
    "name": string,
    "id": string
}
interface __IOrganizationInfo_0_sub_001 {
    "name": string,
    "id": string
}
export interface IOrganizationInfo_0 {
    "county": __IOrganizationInfo_0_sub_001,
    "description": string,
    "name": string,
    "email": string,
    "id": number,
    "address1": string,
    "state": __IOrganizationInfo_0_sub_002
}
export interface IUserInfo {
    "firstName": string,
    "id": number,
    "phoneNumber": string,
    "stateId": number,
    "address2": string,
    "organizationId": number,
    "countryId": number,
    "address1": string,
    "zipCode": string,
    "city": string,
    "email": string,
    "lastName": string
}
interface __IOrganizationInfo_sub_002 {
    "id": string,
    "name": string
}
interface __IOrganizationInfo_sub_001 {
    "name": string,
    "id": string
}
export interface IOrganizationInfo {
    "email": string,
    "id": number,
    "name": string,
    "county": __IOrganizationInfo_sub_001,
    "state": __IOrganizationInfo_sub_002,
    "address1": string,
    "description": string
}
interface __IOrganizationInfo_1_sub_002 {
    "id": string,
    "name": string
}
interface __IOrganizationInfo_1_sub_001 {
    "name": string,
    "id": string
}
export interface IOrganizationInfo_1 {
    "name": string,
    "county": __IOrganizationInfo_1_sub_001,
    "address1": string,
    "id": number,
    "email": string,
    "description": string,
    "state": __IOrganizationInfo_1_sub_002
}
export interface IOrganizationInfo_toDelete_0 {
    "branchName": string,
    "branchId": number,
    "firstName": string,
    "lastName": string,
    "organizationId": number,
    "organizationName": string
}
export interface userInfo {
    "jobID": string,
    "firstName": string,
    "position": string,
    "lastName": string,
    "city": string,
    "username": string,
    "phoneNumber": string
}
//
export interface SignupServiceResponse {
    "_id": string,
    "username": string,
    "_updatedAt": string,
    "_createdAt": string,
    "sessionToken": string
}
//
export interface UpdateProfileServiceResponse {}
//
interface __LoginDB_Userdisplay_read_serviceResponse_sub_002 {
    "write": boolean,
    "read": boolean
}
interface __LoginDB_Userdisplay_read_serviceResponse_sub_001 {
    "*": __LoginDB_Userdisplay_read_serviceResponse_sub_002
}
export interface LoginDB_Userdisplay_read_serviceResponse {
    "jobID": string,
    "city": string,
    "position": string,
    "_createdAt": string,
    "phoneNumber": string,
    "_id": string,
    "acl": __LoginDB_Userdisplay_read_serviceResponse_sub_001,
    "_updatedAt": string,
    "lastName": string,
    "firstName": string,
    "username": string
}
//
export interface LoginDB_login_serviceResponse {
    "_id": string,
    "sessionToken": string
}
//
interface __LoginDB_Userdisplay_query_serviceResponse_sub_003 {
    "write": boolean,
    "read": boolean
}
interface __LoginDB_Userdisplay_query_serviceResponse_sub_002 {
    "*": __LoginDB_Userdisplay_query_serviceResponse_sub_003
}
interface __LoginDB_Userdisplay_query_serviceResponse_sub_001 {
    "jobID": string,
    "username": string,
    "phoneNumber": string,
    "acl": __LoginDB_Userdisplay_query_serviceResponse_sub_002,
    "position": string,
    "_updatedAt": string,
    "_createdAt": string,
    "city": string,
    "_id": string,
    "firstName": string,
    "lastName": string
}
export interface LoginDB_Userdisplay_query_serviceResponse extends Array < __LoginDB_Userdisplay_query_serviceResponse_sub_001 > {}
//
export interface GetProfileServiceResponse {}
//
export interface SignUpResponse {
    "_updatedAt": string,
    "username": string,
    "_createdAt": string,
    "sessionToken": string,
    "_id": string
}
//
export interface LogoutServiceResponse {}
//
export interface LoginDB_bugReports_create_serviceResponse {
    "_createdAt": string,
    "_id": string
}
//
export interface LoginServiceResponse {
    "sessionToken": string,
    "_id": string
}
//
interface __LoginDB_Userdisplay_list_serviceResponse_sub_003 {
    "write": boolean,
    "read": boolean
}
interface __LoginDB_Userdisplay_list_serviceResponse_sub_002 {
    "*": __LoginDB_Userdisplay_list_serviceResponse_sub_003
}
interface __LoginDB_Userdisplay_list_serviceResponse_sub_001 {
    "city": string,
    "jobID": string,
    "position": string,
    "_id": string,
    "_createdAt": string,
    "phoneNumber": string,
    "acl": __LoginDB_Userdisplay_list_serviceResponse_sub_002,
    "_updatedAt": string,
    "firstName": string,
    "lastName": string,
    "username": string
}
export interface LoginDB_Userdisplay_list_serviceResponse extends Array < __LoginDB_Userdisplay_list_serviceResponse_sub_001 > {}
//
export interface SocialSharingServiceResponse {
    "app": string
}