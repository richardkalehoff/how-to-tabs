( function() {
    'use strict';

    var assert = require( './assert' );
    var tabs = require( './tabs.js' );

    describe( 'Tabs', function() {
        var IRRELEVANT = 'irrelevant';

        var container;

        beforeEach( function() {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
        } );

        afterEach( function() {
            removeElement( container );
        } );

        it( 'hides all content elements except the default upon initilization', function() {
            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.init( {
                tabs: [ createTab(), defaultTab, createTab() ],
                content: [ content1, defaultContent, content3 ],
                defaultTab: defaultTab,
                hiddenContentClass: 'hideClass',
                activeTabClass: IRRELEVANT
            } );

            assert.equal( getClasses( content1 ), 'hideClass', 'element 1 should be hidden' );
            assert.equal( getClasses( defaultContent ), '', 'default element and should not be hidden' );
            assert.equal( getClasses( content3 ), 'hideClass', 'element 3 should be hidden' );
        } );

        it( 'it styles the default tab with a class', function() {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();
            var defaultContent = createTabContent();

            tabs.init( {
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                defaultTab: defaultTab,
                hiddenContentClass: IRRELEVANT,
                activeTabClass: 'activeTab'
            } );

            assert.equal( getClasses( tab1 ), null, 'tab1 should not be styled' );
            assert.equal( getClasses( defaultTab ), 'activeTab', 'default tab should be styled' );
            assert.equal( getClasses( tab3 ), null, 'tab3 should not be styled' );
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

        function getClasses( element ) {
            return element.getAttribute( 'class' );
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
