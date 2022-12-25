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
    templateUrl: 'SocialSharingScreen.html',
    selector: 'page-social-sharing-screen',
    styleUrls: ['SocialSharingScreen.scss']
})
export class SocialSharingScreen {
    public imageToShare: any = '';
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
    @ViewChild('j_2', {
        static: false
    }) public j_2;
    @ViewChild('j_3', {
        static: false
    }) public j_3;
    @ViewChild('j_4', {
        static: false
    }) public j_4;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    async sharebuttonClick__j_9(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_socialSharing();
    }
    private $aio_dataServices = {
        "socialSharing": "invokeService_socialSharing"
    }
    invokeService_socialSharing(cb ? : Function) {
        this.Apperyio.getService("SocialSharingService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {}
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["message"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_2', 'ionic4input', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["subject"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_3', 'ionic4input', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["url"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_4', 'ionic4input', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["files"], ((value) => {
                    return [value];
                })(this.$aio_mappingHelper.getSubdata(this.imageToShare, [])));
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        mappingData.j_17__text = () => this.$aio_mappingHelper.getSubdata(res, ["app"]);
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