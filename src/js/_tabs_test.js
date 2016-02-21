( function() {
    'use strict';

    var assert = require( './assert' );
    var tabs = require( './tabs.js' );

    describe( 'Tabs', function() {

        var ACTIVE_TAB = 'activeTab';
        var HIDDEN_CONTENT = 'hideClass';
        var IRRELEVANT = 'irrelevant';

        var container;

        beforeEach( function() {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
        } );

        afterEach( function() {
            removeElement( container );
        } );

        it( 'use a class to hide all content elements except the default upon initilization', function() {
            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.init( {
                tabs: [ createTab(), defaultTab, createTab() ],
                content: [ content1, defaultContent, content3 ],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVANT,
                hiddenContentClass: HIDDEN_CONTENT
            } );

            assertContentHidden( content1, 'content 1 should be hidden' );
            assertContentVisible( defaultContent, 'default content should be visible' );
            assertContentHidden( content3, 'content 3 should be hidden' );
        } );

        it( 'styles the default tab with a class upon initialization', function() {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();
            var defaultContent = createTabContent();

            tabs.init( {
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                defaultTab: defaultTab,
                hiddenContentClass: IRRELEVANT,
                activeTabClass: ACTIVE_TAB
            } );

            assertTabInactive( tab1, 'tab 1 should be inactive' );
            assertTabActive( defaultTab, 'default tab should be active' );
            assertTabInactive( tab3, 'tab 3 should be inactive' );
        } );

        it( 'switches content when tab is clicked', function() {
            var tab1 = createTab();
            var tab2 = createTab();
            var tab3 = createTab();

            var content1 = createTabContent();
            var content2 = createTabContent();
            var content3 = createTabContent();

            tabs.init( {
                tabs: [ tab1, tab2, tab3 ],
                content: [ content1, content2, content3 ],
                defaultTab: tab1,
                activeTabClass: ACTIVE_TAB,
                hiddenContentClass: HIDDEN_CONTENT
            } );

            tab2.click();
            assertContentVisible( content2, 'content 2 should be visible after click' );
            assertTabActive( tab2, 'tab 2 should be visible after click' );

            assertContentHidden( content1, 'content 1 should no longer be visible after click' );
            assertTabInactive( tab1, 'tab 1 should no longer be visible after click' );

            tab3.click();
            assertContentVisible( content3, 'content 3 should be able to click multiple tabs' );
        } );

        it( 'preserves existing classes when adding new classes', function() {
            var defaultTab = createTab();
            defaultTab.setAttribute( 'class', 'existingTabClass' );

            var defaultContent = createTabContent();
            var hiddenContent = createTabContent();
            hiddenContent.setAttribute( 'class', 'existingContentClass' );

            tabs.init( {
                tabs: [ defaultTab, createTab() ],
                content: [ defaultContent, hiddenContent ],
                defaultTab: defaultTab,
                hiddenContentClass: 'hiddenContent',
                activeTabClass: 'activeTab'
            } );

            assert.equal( getClasses( defaultTab ), 'existingTabClass activeTab', 'tab should preserve existing classes' );
            assert.equal( getClasses( hiddenContent ), 'existingContentClass hiddenContent', 'content should preserve existing classes' );
        } );

        function assertTabInactive( tab, message ) {
            assert.equal( getClasses( tab ), '', message );
        }

        function assertTabActive( tab, message ) {
            assert.equal( getClasses( tab ), ACTIVE_TAB, message );
        }

        function assertContentVisible( element, message ) {
            assert.equal( getClasses( element ), '', message );
        }

        function assertContentHidden( element, message ) {
            assert.equal( getClasses( element ), HIDDEN_CONTENT, message );
        }

        function getClasses( element ) {
            var result = element.getAttribute( 'class' );
            if ( result === null ) {
                result = '';
            }
            return result;
        }

        function createTab() {
            var tab = document.createElement( 'div' );
            tab.innerHTML = 'tab';
            return tab;
        }

        function createTabContent() {
            var tab = document.createElement( 'div' );
            tab.innerHTML = 'content';
            return tab;
        }

        function addElement( tagName ) {
            var element = document.createElement( tagName );
            container.appendChild( element );
            return element;
        }

        function removeElement( element ) {
            element.parentNode.removeChild( element );
        }

    } );

} )();
