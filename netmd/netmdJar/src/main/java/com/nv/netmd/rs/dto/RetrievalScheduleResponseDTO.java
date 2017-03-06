/**
* RetrievalScheduleResponseDTO.java
* 
* @Author Sreeram
*
* Version 1.0 May 3, 2013
*
* Copyright (c) 2011-2012 Netvarth Technologies Pvt. Ltd.
* All rights reserved
*
*/
package com.nv.netmd.rs.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 */
public class RetrievalScheduleResponseDTO {
	private List<ScheduleDetail> retrieveScheduleList= new ArrayList<ScheduleDetail>();
	private ErrorDTO error;
	private boolean success;
	/**
	 * @return the retrieveScheduleList
	 */
	public List<ScheduleDetail> getRetrieveScheduleList() {
		return retrieveScheduleList;
	}
	/**
	 * @param retrieveScheduleList the retrieveScheduleList to set
	 */
	public void setRetrieveScheduleList(List<ScheduleDetail> retrieveScheduleList) {
		this.retrieveScheduleList = retrieveScheduleList;
	}
	/**
	 * @return the error
	 */
	public ErrorDTO getError() {
		return error;
	}
	/**
	 * @param error the error to set
	 */
	public void setError(ErrorDTO error) {
		this.error = error;
	}
	/**
	 * @return the success
	 */
	public boolean isSuccess() {
		return success;
	}
	/**
	 * @param success the success to set
	 */
	public void setSuccess(boolean success) {
		this.success = success;
	}
}
