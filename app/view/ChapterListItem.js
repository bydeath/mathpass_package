/**
 * @class voice.view.ChapterListItem
 * @extends Ext.dataview.component.DataItem
 * Description
 */
Ext.define('MathPASS.view.ChapterListItem', {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'chapterlistitem',

	config: {
		styleHtmlContent: true,
		items: [
		 {
			xtype: 'label',
			html: 'title',
            baseCls: 'user',
			itemId: 'myLabel',
			flex: 1
		}]
	},

	updateRecord: function(record) {
		var me = this;
        if(record!=null)
        {
		me.down('#myLabel')
			.setHtml(record.get('title'));
        }
		me.callParent(arguments);
	}
});
