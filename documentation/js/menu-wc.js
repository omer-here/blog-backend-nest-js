'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">blog-backend-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' :
                                            'id="xs-controllers-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' :
                                        'id="xs-injectables-links-module-AppModule-a56deaf08f483c502b9ed2c85f09062e784aebabe1c54a006406792325688715bb834ae8007d6bfeb22b72b2253fb3413f6fcd4b796af5ca33d09a8207f11601"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' :
                                            'id="xs-controllers-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' :
                                        'id="xs-injectables-links-module-AuthModule-39020940b62bd66ce2a387b9923dc19a26fd1d53107ee3202853dde1deaa2721eaf62b69c7467331a6bddfe85cb359e1fedd3ac3a21bd5d4c740652bddec35a4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' :
                                            'id="xs-controllers-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' :
                                        'id="xs-injectables-links-module-PostsModule-f4fe78844821c6a0477581c07b5aaf442311778c21a298aaec0a8cc965fed747073a19cb4b25ec9048d70dfafd3bd3fc2fd8db06385f4ee31c82993e1a9694e7"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' :
                                            'id="xs-controllers-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' :
                                        'id="xs-injectables-links-module-UsersModule-4aa0c5f3bb42aa3e6ca3f7301ba92ee7d4a46913b5bd54a5b038f5230489b258c99a2fe36be01c33a96b652f48a4e66d47383483d64177d59f21d02aa2e2bc20"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});