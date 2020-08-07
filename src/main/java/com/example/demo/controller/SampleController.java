package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class SampleController {

	@PostMapping(value = "/sample")
	public Map<String,Object> Sample(@RequestParam Map<String,Object> params,
									 @RequestParam MultipartFile a4) {
		Map<String,Object> response = new HashMap<String,Object>();
		System.out.println(params.get("a1"));
		System.out.println(params.get("a2"));
		System.out.println(params.get("a3"));
		System.out.println(a4.getOriginalFilename());
		response.put("success",true);
		response.put("data","ABC");
		return response;
	}
}
