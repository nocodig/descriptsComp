const template = [{
	"name": "基本信息",
	"position": 1,
	"metadataList": [{
		"metadata": {
			"english": "catalogTitle",
			"chinese": "信息资源名称",
			"type": "input",
			"validator": {
				"required": true,
				"pattern": "^.{1,64}$",
				"message": "此项为必填项，1~64个字符"
			},
			"placehoder": "请输入信息资源名称"
		},
		"position": {
			"row": 1,
			"column": 1,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "catalogEnglishTitle",
			"chinese": "信息资源英文名称",
			"type": "input",
			"validator": {
				"required": true,
				"pattern": "^[a-zA-Z0-9-_]{1,64}$",
				"message": "此项为必填项，由英文、数字、'-'、'_'组成，1~64个字符"
			},
			"placehoder": "请输入信息资源英文名称"
		},
		"position": {
			"row": 1,
			"column": 2,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "categoryDetailName",
			"chinese": "类目",
			"type": "tree",
			"validator": {
				"required": true,
				"pattern": "^.{1,64}$",
				"message": "此项为必填项"
			}
		},
		"position": {
			"row": 2,
			"column": 1,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "internalOrg",
			"chinese": "信息资源提供方",
			"type": "inputAndSelect",
			"validator": {
				"required": true,
				"pattern": "^.{1,64}$",
				"message": "此项为必填项，1~64个字符"
			},
			"placehoder": "请输入信息资源提供方"
		},
		"position": {
			"row": 2,
			"column": 2,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "catalogAbstract",
			"chinese": "信息资源摘要",
			"type": "textarea",
			"validator": {
				"required": true,
				"pattern": "^[\\s\\S]{1,9999}$",
				"message": "此项为必填项，1~9999个字符"
			},
			"placehoder": "请输入信息资源摘要"
		},
		"position": {
			"row": 3,
			"column": 1,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "internalOrgCode",
			"chinese": "资源提供方代码",
			"validator": {
				"required": true,
				"pattern": "^[a-zA-Z0-9-_/]{1,64}$",
				"message": "此项为必填项，由英文、数字、'-'、'_'、'/'组成，1~64个字符"
			},
			"placehoder": "请输入信息资源内部提供方代码"
		},
		"position": {
			"row": 3,
			"column": 2,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "catalogCode",
			"chinese": "信息资源代码",
			"type": "input",
			"validator": {
				"required": true,
				"pattern": "^[a-zA-Z0-9-_/]{1,64}$",
				"message": "此项为必填项，由英文、数字、'-'、'_'、'/'组成，1~64个字符"
			},
			"placehoder": "请输入信息资源代码"
		},
		"position": {
			"row": 4,
			"column": 1,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "resourceType",
			"chinese": "信息资源格式分类",
			"type": "cascade",
			"validator": {
				"required": true,
				"message": "此项为必填项"
			},
			"placehoder": "请选择信息资源格式分类",
			"dictRef": "resourceType",
			"cascade": {
				"child": "resourceParamType",
				"componentType": "select",
				"type": "parent",
				"hasOtherValue": false
			}
		},
		"position": {
			"row": 4,
			"column": 2,
			"columnWidth": 2
		}
	}]
}, {
	"name": "资源普查",
	"position": 2,
	"metadataList": [{
		"metadata": {
			"english": "storeSize",
			"chinese": "数据存储总量",
			"type": "input",
			"validator": {
				"required": false,
				"pattern": "^(0|([1-9][0-9]{0,8})|((0\\.{1})|([1-9][0-9]{0,8}\\.{1}))[0-9]{1,4})$",
				"message": "请输入浮点数字，整数位0~9位数字，小数位0~4位数字"
			}
		},
		"position": {
			"row": 1,
			"column": 1,
			"columnWidth": 2
		}
	}, {
		"metadata": {
			"english": "structCount",
			"chinese": "结构化信息记录总数",
			"type": "input",
			"validator": {
				"required": false,
				"pattern": "^(0|([1-9][0-9]{0,8})|((0\\.{1})|([1-9][0-9]{0,8}\\.{1}))[0-9]{1,4})$",
				"message": "请输入浮点数字，整数位0~9位数字，小数位0~4位数字"
			}
		},
		"position": {
			"row": 1,
			"column": 2,
			"columnWidth": 2
		}
	}]
}];

const data = {"infoItems":[],"resourceParamType":"doc","internalOrgCode":"002010","businessSystem":"","catalogTitle":"lf统一table","catalogAbstract":"test","catalogCode":"00201000006","regionIds":"","openLimit":"是","multiSelectedCategoriesId":"","resourceParamTypeOther":"","accessType":"共享平台方式","catalogSourceId":"","accessLimit":"有条件共享","updateCycle":"其他","storeSize":"","internalOrgId":"5","openCondition":"tst","internalOrg":"Catalogue_RC","entryType":"byhand","categoryDetailName":"lfTest","relatedResourceIds":"","categoryDetailId":"6","accessCondition":"sf","accessParamType":"接口","createTime":"","catalogEnglishTitle":"lftable","resourceType":"电子文件","structCount":""}

export {
  template,
  data
}