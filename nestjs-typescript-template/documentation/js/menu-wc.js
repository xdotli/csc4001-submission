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
                    <a href="index.html" data-type="index-link">nest-typescript-starter documentation</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TwoFactorAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-99a7a34a499d598d21695d8e827ae1a4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtRefreshTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtTwoFactorStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtTwoFactorStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TwoFactorAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' : 'data-target="#xs-controllers-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' :
                                            'id="xs-controllers-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' : 'data-target="#xs-injectables-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' :
                                        'id="xs-injectables-links-module-CategoriesModule-e36d810e4149480c253ca9d44fe97e52"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChargeModule.html" data-type="entity-link" >ChargeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ChargeModule-2b081ec69c36e74b82ad233b797acf8f"' : 'data-target="#xs-controllers-links-module-ChargeModule-2b081ec69c36e74b82ad233b797acf8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChargeModule-2b081ec69c36e74b82ad233b797acf8f"' :
                                            'id="xs-controllers-links-module-ChargeModule-2b081ec69c36e74b82ad233b797acf8f"' }>
                                            <li class="link">
                                                <a href="controllers/ChargeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChargeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChatModule-5c6ee99e116e92417c58d9fded629f18"' : 'data-target="#xs-injectables-links-module-ChatModule-5c6ee99e116e92417c58d9fded629f18"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChatModule-5c6ee99e116e92417c58d9fded629f18"' :
                                        'id="xs-injectables-links-module-ChatModule-5c6ee99e116e92417c58d9fded629f18"' }>
                                        <li class="link">
                                            <a href="injectables/ChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentsModule.html" data-type="entity-link" >CommentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CommentsModule-fd9874e56594ed6c87527914427c8df4"' : 'data-target="#xs-controllers-links-module-CommentsModule-fd9874e56594ed6c87527914427c8df4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommentsModule-fd9874e56594ed6c87527914427c8df4"' :
                                            'id="xs-controllers-links-module-CommentsModule-fd9874e56594ed6c87527914427c8df4"' }>
                                            <li class="link">
                                                <a href="controllers/CommentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreditCardsModule.html" data-type="entity-link" >CreditCardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CreditCardsModule-70f3fd528b530010dbb44721ff1e2679"' : 'data-target="#xs-controllers-links-module-CreditCardsModule-70f3fd528b530010dbb44721ff1e2679"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CreditCardsModule-70f3fd528b530010dbb44721ff1e2679"' :
                                            'id="xs-controllers-links-module-CreditCardsModule-70f3fd528b530010dbb44721ff1e2679"' }>
                                            <li class="link">
                                                <a href="controllers/CreditCardsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditCardsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailConfirmationModule.html" data-type="entity-link" >EmailConfirmationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' : 'data-target="#xs-controllers-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' :
                                            'id="xs-controllers-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' }>
                                            <li class="link">
                                                <a href="controllers/EmailConfirmationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailConfirmationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' : 'data-target="#xs-injectables-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' :
                                        'id="xs-injectables-links-module-EmailConfirmationModule-5b86bad3bf541304446e8931de640c2c"' }>
                                        <li class="link">
                                            <a href="injectables/EmailConfirmationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailConfirmationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailModule-1f872eac402d8e97565cea1beddfef3e"' : 'data-target="#xs-injectables-links-module-EmailModule-1f872eac402d8e97565cea1beddfef3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-1f872eac402d8e97565cea1beddfef3e"' :
                                        'id="xs-injectables-links-module-EmailModule-1f872eac402d8e97565cea1beddfef3e"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailSchedulingModule.html" data-type="entity-link" >EmailSchedulingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' : 'data-target="#xs-controllers-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' :
                                            'id="xs-controllers-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' }>
                                            <li class="link">
                                                <a href="controllers/EmailSchedulingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailSchedulingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' : 'data-target="#xs-injectables-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' :
                                        'id="xs-injectables-links-module-EmailSchedulingModule-771006339e9b2bfda2e05fd0b382cc15"' }>
                                        <li class="link">
                                            <a href="injectables/EmailSchedulingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailSchedulingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesModule-648e55cb3130e4641a3b25cc956441e8"' : 'data-target="#xs-injectables-links-module-FilesModule-648e55cb3130e4641a3b25cc956441e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-648e55cb3130e4641a3b25cc956441e8"' :
                                        'id="xs-injectables-links-module-FilesModule-648e55cb3130e4641a3b25cc956441e8"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GoogleAuthenticationModule.html" data-type="entity-link" >GoogleAuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' : 'data-target="#xs-controllers-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' :
                                            'id="xs-controllers-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' }>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' : 'data-target="#xs-injectables-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' :
                                        'id="xs-injectables-links-module-GoogleAuthenticationModule-364f8399a40322e0f1e8aba5d5a8c1f1"' }>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' : 'data-target="#xs-controllers-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' :
                                            'id="xs-controllers-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' : 'data-target="#xs-injectables-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' :
                                        'id="xs-injectables-links-module-HealthModule-a85f2fbb075f48c8feb7a85690da69f9"' }>
                                        <li class="link">
                                            <a href="injectables/ElasticsearchHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ElasticsearchHealthIndicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-21191556f5c9e8286bd0b60bfa510998"' : 'data-target="#xs-injectables-links-module-LoggerModule-21191556f5c9e8286bd0b60bfa510998"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-21191556f5c9e8286bd0b60bfa510998"' :
                                        'id="xs-injectables-links-module-LoggerModule-21191556f5c9e8286bd0b60bfa510998"' }>
                                        <li class="link">
                                            <a href="injectables/CustomLogger.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomLogger</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OptimizeModule.html" data-type="entity-link" >OptimizeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OptimizeModule-6e46448c45364b310af291bcc40e6147"' : 'data-target="#xs-controllers-links-module-OptimizeModule-6e46448c45364b310af291bcc40e6147"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OptimizeModule-6e46448c45364b310af291bcc40e6147"' :
                                            'id="xs-controllers-links-module-OptimizeModule-6e46448c45364b310af291bcc40e6147"' }>
                                            <li class="link">
                                                <a href="controllers/OptimizeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptimizeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' : 'data-target="#xs-controllers-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' :
                                            'id="xs-controllers-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' : 'data-target="#xs-injectables-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' :
                                        'id="xs-injectables-links-module-PostsModule-e9aa2fefc9d42c5e7e2573d990909807"' }>
                                        <li class="link">
                                            <a href="injectables/PostsLoaders.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsLoaders</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsSearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsSearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductCategoriesModule.html" data-type="entity-link" >ProductCategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' : 'data-target="#xs-controllers-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' :
                                            'id="xs-controllers-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' }>
                                            <li class="link">
                                                <a href="controllers/ProductCategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' : 'data-target="#xs-injectables-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' :
                                        'id="xs-injectables-links-module-ProductCategoriesModule-0bcd43cbd0adcf790197941f61cac327"' }>
                                        <li class="link">
                                            <a href="injectables/ProductCategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' : 'data-target="#xs-controllers-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' :
                                            'id="xs-controllers-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' : 'data-target="#xs-injectables-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' :
                                        'id="xs-injectables-links-module-ProductsModule-7139fb893a654dcaf732c706d83ea2f1"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PubSubModule.html" data-type="entity-link" >PubSubModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SmsModule.html" data-type="entity-link" >SmsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' : 'data-target="#xs-controllers-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' :
                                            'id="xs-controllers-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' }>
                                            <li class="link">
                                                <a href="controllers/SmsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' : 'data-target="#xs-injectables-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' :
                                        'id="xs-injectables-links-module-SmsModule-eb72133d21dbdd81a654a612ec18154a"' }>
                                        <li class="link">
                                            <a href="injectables/SmsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeModule.html" data-type="entity-link" >StripeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StripeModule-29463cf140091f992288c772b9f749bc"' : 'data-target="#xs-injectables-links-module-StripeModule-29463cf140091f992288c772b9f749bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StripeModule-29463cf140091f992288c772b9f749bc"' :
                                        'id="xs-injectables-links-module-StripeModule-29463cf140091f992288c772b9f749bc"' }>
                                        <li class="link">
                                            <a href="injectables/StripeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeWebhookModule.html" data-type="entity-link" >StripeWebhookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' : 'data-target="#xs-controllers-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' :
                                            'id="xs-controllers-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' }>
                                            <li class="link">
                                                <a href="controllers/StripeWebhookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeWebhookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' : 'data-target="#xs-injectables-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' :
                                        'id="xs-injectables-links-module-StripeWebhookModule-8d211513612d4c5dcdf6cfbcde64f660"' }>
                                        <li class="link">
                                            <a href="injectables/StripeWebhookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeWebhookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubscribersModule-11efc86676d0fd2367b05661b67f2707"' : 'data-target="#xs-controllers-links-module-SubscribersModule-11efc86676d0fd2367b05661b67f2707"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-11efc86676d0fd2367b05661b67f2707"' :
                                            'id="xs-controllers-links-module-SubscribersModule-11efc86676d0fd2367b05661b67f2707"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsModule.html" data-type="entity-link" >SubscriptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' : 'data-target="#xs-controllers-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' :
                                            'id="xs-controllers-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' }>
                                            <li class="link">
                                                <a href="controllers/SubscriptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' : 'data-target="#xs-injectables-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' :
                                        'id="xs-injectables-links-module-SubscriptionsModule-8e6559370dcce490ae031b33506e5aa4"' }>
                                        <li class="link">
                                            <a href="injectables/SubscriptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' : 'data-target="#xs-controllers-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' :
                                            'id="xs-controllers-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' : 'data-target="#xs-injectables-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' :
                                        'id="xs-injectables-links-module-UsersModule-8b1853e4f8d2a4acc24bbb8bd3890a2b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChargeController.html" data-type="entity-link" >ChargeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommentsController.html" data-type="entity-link" >CommentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CreditCardsController.html" data-type="entity-link" >CreditCardsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailSchedulingController.html" data-type="entity-link" >EmailSchedulingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductCategoriesController.html" data-type="entity-link" >ProductCategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SmsController.html" data-type="entity-link" >SmsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StripeWebhookController.html" data-type="entity-link" >StripeWebhookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscriptionsController.html" data-type="entity-link" >SubscriptionsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddCreditCardDto.html" data-type="entity-link" >AddCreditCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryNotFoundException.html" data-type="entity-link" >CategoryNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatGateway.html" data-type="entity-link" >ChatGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckVerificationCodeDto.html" data-type="entity-link" >CheckVerificationCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmEmailDto.html" data-type="entity-link" >ConfirmEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateChargeDto.html" data-type="entity-link" >CreateChargeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentCommand.html" data-type="entity-link" >CreateCommentCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentHandler.html" data-type="entity-link" >CreateCommentHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLogDto.html" data-type="entity-link" >CreateLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostInput.html" data-type="entity-link" >CreatePostInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductCategoryDto.html" data-type="entity-link" >CreateProductCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseLogger.html" data-type="entity-link" >DatabaseLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailScheduleDto.html" data-type="entity-link" >EmailScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneParams.html" data-type="entity-link" >FindOneParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCommentsDto.html" data-type="entity-link" >GetCommentsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCommentsHandler.html" data-type="entity-link" >GetCommentsHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCommentsQuery.html" data-type="entity-link" >GetCommentsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/Log.html" data-type="entity-link" >Log</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogInDto.html" data-type="entity-link" >LogInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectWithIdDto.html" data-type="entity-link" >ObjectWithIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post-1.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostNotFoundException.html" data-type="entity-link" >PostNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsResolver.html" data-type="entity-link" >PostsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicFile.html" data-type="entity-link" >PublicFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDefaultCreditCardDto.html" data-type="entity-link" >SetDefaultCreditCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StripeEvent.html" data-type="entity-link" >StripeEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Timestamp.html" data-type="entity-link" >Timestamp</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenVerificationDto.html" data-type="entity-link" >TokenVerificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TwoFactorAuthenticationCodeDto.html" data-type="entity-link" >TwoFactorAuthenticationCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomLogger.html" data-type="entity-link" >CustomLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailSchedulingService.html" data-type="entity-link" >EmailSchedulingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExcludeNullInterceptor.html" data-type="entity-link" >ExcludeNullInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GraphqlJwtAuthGuard.html" data-type="entity-link" >GraphqlJwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCacheInterceptor.html" data-type="entity-link" >HttpCacheInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthenticationGuard.html" data-type="entity-link" >JwtAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtTwoFactorGuard.html" data-type="entity-link" >JwtTwoFactorGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthenticationGuard.html" data-type="entity-link" >LocalAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsMiddleware.html" data-type="entity-link" >LogsMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsService.html" data-type="entity-link" >LogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsLoaders.html" data-type="entity-link" >PostsLoaders</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsSearchService.html" data-type="entity-link" >PostsSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductCategoriesService.html" data-type="entity-link" >ProductCategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SmsService.html" data-type="entity-link" >SmsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StripeService.html" data-type="entity-link" >StripeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StripeWebhookService.html" data-type="entity-link" >StripeWebhookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionsService.html" data-type="entity-link" >SubscriptionsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EmailConfirmationGuard.html" data-type="entity-link" >EmailConfirmationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BookProperties.html" data-type="entity-link" >BookProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CarProperties.html" data-type="entity-link" >CarProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostCountResult.html" data-type="entity-link" >PostCountResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostSearchBody.html" data-type="entity-link" >PostSearchBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostSearchResult.html" data-type="entity-link" >PostSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithRawBody.html" data-type="entity-link" >RequestWithRawBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationTokenPayload.html" data-type="entity-link" >VerificationTokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});