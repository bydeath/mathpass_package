Ext.define('MathPASS.view.course',{
    extend: 'Ext.dataview.DataView',
    xtype:'chapterview',
    config:{
store:Ext.create('Ext.data.Store',{
    model:'MathPASS.model.course',
autoLoad:true,
autoDestroy:true,
proxy:{
    type:'ajax',
url:'http://wme.lzu.edu.cn/MathPASS_YWC/course.php',
reader:{
    type:'json'
}
}
})
            
    }
})
