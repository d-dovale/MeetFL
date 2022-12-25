import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Profile.html',
    selector: 'page-profile',
    styleUrls: ['Profile.scss']
})
export class Profile {
    public editMode: boolean = false;
    public userInfo: any = {};
    public phoneNumber: string;
    public photo: string = "./assets/images/person.png";
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
    }
    @ViewChild('profileForm_el', {
        static: false
    }) public profileForm_el;
    @ViewChild('profileForm', {
        static: true
    }) public profileForm;
    setEditMode(editModeValue) {
        this.editMode = editModeValue;
        const items = < HTMLCollection > document.getElementsByClassName('profile-form')[0].getElementsByTagName('ion-item');
        for (let i = 0; i < items.length; i++) {
            const lines = this.editMode ? 'inset' : 'none';
            items[i].setAttribute('lines', lines);
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_86();
    }
    async pageIonViewDidEnter__j_86(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_get();
    }
    async cancelbuttonClick__j_126(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.profileForm.form.setValue(this.userInfo);
        this.setEditMode(false);
    }
    async savebuttonClick__j_128(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_updateProfile();
    }
    async editbuttonClick__j_130(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.setEditMode(true);
    }
    private $aio_dataServices = {
        "getProfile": "invokeService_getProfile",
        "updateProfile": "invokeService_updateProfile",
        "update": "invokeService_update",
        "get": "invokeService_get"
    }
    invokeService_getProfile(cb ? : Function) {
        this.Apperyio.getService("GetProfileService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'profileForm', 'ionic4form', 'formData'));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Run TypeScript */
                        console.log(res);
                        this.userInfo = res;
                        this.profileForm.form.setValue(this.userInfo);
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_updateProfile(cb ? : Function) {
        this.Apperyio.getService("UpdateProfileService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'profileForm', 'ionic4form', 'formData'));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Run TypeScript */
                        this.userInfo = this.profileForm.form.value;
                        this.setEditMode(false);
                        /* Invoke data service */
                        this.invokeService_getProfile();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_update(cb ? : Function) {
        this.Apperyio.getService("").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Run TypeScript */
                        this.userInfo = this.profileForm.form.value;
                        this.setEditMode(false);
                        /* Invoke data service */
                        this.invokeService_get();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_get(cb ? : Function) {
        this.Apperyio.getService("LoginDB_Userdisplay_read_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                let params = {}
                let headers = {}
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.userInfo = this.$aio_mappingHelper.updateData(this.userInfo, [], await this.$aio_mappingHelper.getStorageValue("userData", []));
                        /* Run TypeScript */
                        console.log(res);
                        this.userInfo = res;
                        this.profileForm.form.setValue(this.userInfo);
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}