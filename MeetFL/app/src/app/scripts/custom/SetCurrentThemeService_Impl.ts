import {
    Injectable
} from '@angular/core';
import _ from "lodash";
import {
    Observable
} from "rxjs/Observable";
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    EntityApiService
} from '../apperyio/apperyio';
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

@Injectable()
class SetCurrentThemeService {
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private http: HttpClient) {}
    execute(reqOpts ? : any) {
        return new Observable((observer) => {
            try {
                var service = this.entityAPI.get('SetCurrentThemeService'),
                    echo = service.echo,
                    defaults = service.request.data,
                    request,
                    response;
                if (_.isUndefined(echo)) {
                    /**
                     * Passed request data structure IS RECOMMENDED to match the default request, described in service!
                     * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
                     */
                    request = _.extend({}, defaults, reqOpts);

                    /**
                     * CUSTOM CODE for processing request and forming responce could be placed here
                     * Response structure IS RECOMMENDED to match default response, described in service!
                     * An example of forming an empty response:
                     */
                    const currentTheme = localStorage['apperyio.theme.name'];
                    if (currentTheme) {
                        try {
                            document.body.classList.toggle(currentTheme, false);
                        } catch (e) {
                            console.log(e);
                        }

                    }

                    const themeName = request.data.themeName;

                    console.log(themeName + ' was set as current theme')
                    localStorage['apperyio.theme.name'] = themeName;
                    if (themeName) {
                        try {
                            document.body.classList.toggle(themeName, true);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    response = {
                        'themeName': themeName
                    };

                    observer.next(response);
                    observer.complete();
                } else {
                    try {
                        echo = JSON.parse(echo);
                    } catch (e) {}

                    observer.next(echo);
                    observer.complete();
                }
            } catch (e) {
                console.log('error', e);
                observer.error(e);
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    SetCurrentThemeService as ExportedClass
};