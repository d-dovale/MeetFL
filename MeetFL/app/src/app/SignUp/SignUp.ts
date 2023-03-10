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
    ExportedClass as FormUtils
} from '../scripts/custom/FormUtils';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'SignUp.html',
    selector: 'page-sign-up',
    styleUrls: ['SignUp.scss']
})
export class SignUp {
    public giving: boolean;
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
    @ViewChild('signUpForm_el', {
        static: false
    }) public signUpForm_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password', 'jobID']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {}
    ngOnInit() {
        this.pageNgOnInit__j_23();
    }
    async pageNgOnInit__j_23(event ? , currentItem ? ) {
        /* Run TypeScript */
        this.formUtils.showPasswordOnClick('page-sign-up');
    }
    async signupformNgSubmit__j_32(event ? , currentItem ? ) {
        if (this.signUpForm.valid) {
            /* Invoke data service */
            this.invokeService_dbSignup();
        }
    }
    private $aio_dataServices = {
        "dbSignup": "invokeService_dbSignup",
        "service1": "invokeService_service1"
    }
    invokeService_dbSignup(cb ? : Function) {
        this.Apperyio.getService("SignupService").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'spinner': 'circles',
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Tabs');
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Mapping */
                        await this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                        /* Invoke data service */
                        this.invokeService_service1();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Present Toast */
                        await (async () => {
                            let options = {
                                'color': 'danger',
                                'duration': 1000,
                                'message': 'Invalid user\u0027s data',
                                'position': 'top',
                                'buttons': []
                            }
                            let controller = this.Apperyio.getController('ToastController');
                            const toast = await controller.create(options);
                            return await toast.present();
                        })();
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                    }
                )
            }
        );
    }
    invokeService_service1(cb ? : Function) {
        this.Apperyio.getService("SignUp").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
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