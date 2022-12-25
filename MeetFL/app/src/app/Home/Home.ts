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
    DataTableHelperService,
    DataTableOptions,
    SortingOptions,
    DATA_TABLE_MODES
} from '../scripts/apperyio/datatable_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Home.html',
    selector: 'page-home',
    styleUrls: ['Home.scss']
})
export class Home {
    public users: any;
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
    public __getDataTableMapping(data, property, defaultValue) {
        return this.$aio_mappingHelper.getDataTableMapping(data, property, defaultValue);
    }
    @ViewChild('j_161', {
        static: false
    }) public j_161;
    @ViewChild('j_165', {
        static: true
    }) public j_165;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, private $aio_DataTableHelper: DataTableHelperService) {}
    ngOnInit() {
        this.$aio_DataTableHelper.initTableData(this, this.$aio_j_165);
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_157();
    }
    $aio_DataTableOnSort_j_165(e) {
        this.$aio_DataTableHelper.dataTableOnSort(e.sorts[0], this.$aio_j_165);
    }
    private $aio_dataTables = {
        "DataTable1": "$aio_j_165"
    };
    public $aio_j_165: DataTableOptions = {
        headerHeight: 50,
        footerHeight: 50,
        count: 7,
        limit: 5,
        rowHeight: "auto",
        offset: 0,
        mode: DATA_TABLE_MODES.CLIENT_PAGES,
        externalSorting: false,
        componentName: "j_165",
        dataServiceName: "",
        isRowsMapping: false,
        rows: [],
        isLoading: false,
        cssClasses: {
            sortAscending: "datatable-icon-up",
            sortDescending: "datatable-icon-down",
            pagerLeftArrow: "datatable-icon-left",
            pagerRightArrow: "datatable-icon-right",
            pagerPrevious: "datatable-icon-prev",
            pagerNext: "datatable-icon-next"
        },
        messages: {
            emptyMessage: "No data to display",
            totalMessage: "total",
            selectedMessage: "selected"
        },
        sorts: < SortingOptions > {}
    };
    async pageIonViewDidEnter__j_157(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_users();
    }
    async search1IonChange__j_161(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_search();
    }
    async list3Click__j_162(event ? , currentItem ? ) {
        /* Navigate to Page */
        this.Apperyio.navigateTo('UserProfile');
    }
    async logoutbuttonClick__j_178(event ? , currentItem ? ) {
        /* Invoke data service */
        this.invokeService_logout();
    }
    private $aio_dataServices = {
        "users": "invokeService_users",
        "logout": "invokeService_logout",
        "search": "invokeService_search"
    }
    invokeService_users(cb ? : Function) {
        this.Apperyio.getService("LoginDB_Userdisplay_list_service").then(
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
                        this.users = this.$aio_mappingHelper.updateData(this.users, [], this.$aio_mappingHelper.getSubdata(res, []));
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
    invokeService_logout(cb ? : Function) {
        this.Apperyio.getService("LogoutService").then(
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
                headers = this.$aio_mappingHelper.updateData(headers, ['X-Appery-Session-Token'], this.$aio_mappingHelper.getServiceDataValue("sessionToken", []));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': false,
                        'keyboardClose': false,
                        'showBackdrop': false,
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
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
                    }
                )
            }
        );
    }
    invokeService_search(cb ? : Function) {
        this.Apperyio.getService("LoginDB_Userdisplay_query_service").then(
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
                params = this.$aio_mappingHelper.updateData(params, ['where'], ((value) => {
                    return '{"jobID":{"$regex":"^' + value + '", "$options":"i"}}';
                })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_161', 'ionic4search', 'value')));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        (() => {
                            let mappingDataj_162 = typeof mappingData.j_162 === "function" ? mappingData.j_162() : [];
                            mappingData.j_162 = () => {
                                let parentArray = this.$aio_mappingHelper.getSubdata(res, [], []);
                                mappingDataj_162.splice(parentArray.length);
                                parentArray.forEach((v, i) => {
                                    mappingDataj_162[i] = mappingDataj_162[i] || {};
                                    let result__j_162: any = mappingDataj_162[i];
                                    result__j_162.itemData = v;
                                    result__j_162.itemDataParent = parentArray;
                                    result__j_162.j_164__text = this.$aio_mappingHelper.getSubdata(v, ["username"]);
                                });
                                return mappingDataj_162;
                            };
                        })();
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