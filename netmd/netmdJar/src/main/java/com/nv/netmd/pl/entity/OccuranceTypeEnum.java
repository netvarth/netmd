/**
 * OccuranceTypeEnum.java
 * 
 * @Author Sreeram
 *
 * Version 1.0 Feb 28, 2013
 *
 * Copyright (c) 2011-2012 Netvarth Technologies Pvt. Ltd.
 * All rights reserved
 *
 */
package com.nv.netmd.pl.entity;

import com.nv.netmd.business.bl.impl.EnumDisplay;
import com.nv.netmd.exception.ServiceException;

/**
 * 
 */
public enum OccuranceTypeEnum implements EnumDisplay{
	EndsOn("Ends on"),EndsDate("Ends Date"),None("None");
	private String displayName;

	/**
	 * @param displayName
	 */
	private OccuranceTypeEnum(String displayName) {
		this.displayName = displayName;
	}

	/**
	 * @return the displayName
	 */
	public String getDisplayName() {
		return displayName;
	}

	/**
	 * @param displayName the displayName to set
	 */
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
	public static OccuranceTypeEnum getEnum(String value) {
		if(value != null){
			
		for(OccuranceTypeEnum v : values()){        	
			if(value.equalsIgnoreCase(v.getDisplayName())){
				return v;}}
		}
		return null;
	}

	@Override
	public String getParameterName() {
		// TODO Auto-generated method stub
		return null;
	}


}
