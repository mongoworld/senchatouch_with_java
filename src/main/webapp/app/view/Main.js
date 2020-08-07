Ext.define('Sample.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    config: {
    	items : [{
    		xtype : 'textfield',
    		name : 'a1',
    		margin : 5
    	},{
    		xtype : 'textfield',
    		name : 'a2',
    		margin : 5
    	},{
    		xtype : 'textfield',
    		name : 'a3',
    		margin : 5
    	},{
    		xtype : 'filefield',
    		name : 'a4',
    		margin : 5
    	},{
    		xtype : 'button',
    		margin : 5,
    		text : '전송',
    		handler : function(btn){
    			// 회원가입 신청
    			let params = new FormData();
    			let values = btn.up("formpanel").getValues();
    			// 일반 양식 append
    			for(key in values) {
    				if(key != "a4") {
    					params.append(key,values[key]);
    				}
    			}
    			
    			// 파일컴포넌트 탐색 후, 별도 SET
    			let files = btn.up("formpanel").down("[name=a4]").getEl().down("[type=file]").dom.files;
    			params.append("a4",files[0]);
    			
    			// server 통신
    			Ext.Ajax.request({
    				url : '/sample',
    				method : "POST",
				    useDefaultXhrHeader : false,
    				rawData : params,
    				success: function(result){
    					result = Ext.JSON.decode(result.responseText);
				        alert(result.data);
				        alert(result.success);
				    }
    			})
    		}
    	}]
    }
});
