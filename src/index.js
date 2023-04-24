const res = await fetch('https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=1650963727393202441&bl=boq_translate-webserver_20230419.06_p0&hl=en&soc-app=1&soc-platform=1&soc-device=1&_reqid=1680&rt=c', {
	headers: {
		accept: '*/*',
		'accept-language': 'en',
		'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
		'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
		'sec-ch-ua-arch': '"x86"',
		'sec-ch-ua-bitness': '"64"',
		'sec-ch-ua-full-version': '"112.0.5615.137"',
		'sec-ch-ua-full-version-list': '"Chromium";v="112.0.5615.137", "Google Chrome";v="112.0.5615.137", "Not:A-Brand";v="99.0.0.0"',
		'sec-ch-ua-mobile': '?0',
		'sec-ch-ua-model': '""',
		'sec-ch-ua-platform': '"macOS"',
		'sec-ch-ua-platform-version': '"13.3.1"',
		'sec-ch-ua-wow64': '?0',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'same-origin',
		'x-client-data': 'CIy2yQEIorbJAQjBtskBCKmdygEIp+vKAQiWocsBCPyczQEI7Z7NAQiGoM0BCLGhzQEIvaLNAQj/os0BCJ+kzQEIk6XNAQjXps0BCN2mzQEI8KbNAQ==',
		'x-goog-batchexecute-bgr':
			'[";CxW4FUjQAAa41n6VmNZfGZmsrihu4f4mADkAIwj8Rn6soxaGiKWe9hpGuFgOapH-zLhX-tMfzrXjw_9xbNCoAXYNAuE4MfCu3OYLN5PYJn7NKvofAAAAe08AAAACdQEHhAJ8I-953aKuyL6HzUUsHQAjOX2LZIqRaoNBNUeixR91uWCUR22e3xmPnfNn_L6a3x4mcs_2RdTXp-9t1yA8Vlr84QPk88r9uwb12G1M_4ofA6e7El4-PtFjBJFMXXFm-UkJgqW4I1Up1feXUVQIbsu09I8QIjyOKeJCdK4s8TbV2lHqbDVhlFPOA1fSfFS1A-gHhmhQJ-wYj5kTFnLnhwlbufN9Do61p4TbiU0wyVOcOfAYAF-6oLYvSoSwTO94_mKI51LIW12dOlKC3wiGZ1r80b_no2egRxCHl2ccjvZ-rey3S_WoDeex_XfJ_zLxoCe24C56ZW8484frM4lFSBN3uUd0PzFSasNvtUwG-ofl7iNG-wzSdi3Ry8K8ZtCwE8DF5c4rgiWjsJZLSN6_YDcK_Z8K3asDlAL_yMULBExnnmvdDTZk2TbyoK_2pjbMBzNaDdxlrw8-eGd51xw2Y3lqhyBoudRRri091E7M3JC_Y8XvC8OvTalHCMGtaa18HRSwj6xbgC6cF_OJQ-BM5aWrL09xBwg4xO9lxTjtsznCORs1LHJSBW2Tg9PFcPnF7XLtAKigP9xPjAlczUFtSN5YxPy_6x_iWoSDyYe8Xe22A3va4ekXu8G8ibNebOGLXZ4kzBaQVgLPM2X3U0pPtvsaJYKfGhjpvNrv27fpBcOB-pF_2zaEu5sUzaNdrxKZ4FFVrDt-Wy9j-lii58LYzAjt019Vr7FnpoxfRnuuUrJQL7X378fUqKg7xYA7r5v0M9DwcnCz59n6fPUhngnrLgWP0-7WpGHYcVAJAd77nNigR62Hup3w8wOTc43MLDnXJKwxUiOBGDEHvYrMUjAf",null,null,293,59,null,null,0,"2"]',
		'x-same-domain': '1',
		cookie:
			'SEARCH_SAMESITE=CgQI75cB; ADS_VISITOR_ID=00000000-0000-0000-0000-000000000000/104365501944649270586; SID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3jMAwFPEAKC04nXrNOYh-G9g.; __Secure-1PSID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3jMEFUD7gzF3kb_xM1PSjgQw.; __Secure-3PSID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3j2Jv8jl-UcdrGrknQhNBKgA.; HSID=ACZHeDyYYb4d8hRBp; SSID=ALipnPk6Z2Cn1lVMi; APISID=x-0CaJSexeMaF6z8/Adc7X7CAsNuJSgZNh; SAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; __Secure-1PAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; __Secure-3PAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; AEC=AUEFqZdUHcq7Ff4M64zq3qTeJK7BBUEkZDlPDlMGRErtAxaiYkNvZeivXQ; OTZ=7000933_44_48_123900_44_436380; NID=511=Y3Gy9bU5jryubnASx6txRHlN8_iS6dWKBL0B5WLp8bO1oo87cG_zDzuX8pQqxOoFrwl0jOdZVPxHPyITW8pdyMNolA7inEJV4-eHhY1tjnQ1jh_QZLwaU82ZZjhmup-gWEgqJtTFGr45qet9Pjsu_ZvIUpYPf3-roxwRp0QEIV5ySFe9ehaXUzzjk2nOkTbuhjY1x_7o68F-9OZU9_28Xi3dmatimIF9NvPgf5X3dQwQ4griEx-SC83RUH-vR-Mi1niZLeJ9bPGoZ2TmpWk4WpdoB3-FaFkQKdyrnz1sYO5lv2MRlvhtm2kcJ2YTiXaeTykv5avfpnbF8iQ-3b8RTs-sRS7xh2Vk_w4nTqs_ouwHE42JP5uIaoZjb8r0iGz8RfKitw5WUY3npF455onT8PsZXyclSh2LlQ7eyzRY--dodNUy0VLLkSiYoGs2c21UHNAtt1lPfjFWCclq5EzzO_ee_zjj5Mo-Apvk2zATKz245kDRQ9ZegK4OkZq7fIVv7wsjgyhgG1emulFzXgynPPTuy3_fL2IfWzjMORWXJgxxt_UbGrCb1eutSGJx9MfVo1zT; __Secure-ENID=11.SE=kWJCs9GFO2bZNlko7DtZbhQ3tAK4_YgSvLP3WNjDmuFX8s9t3j7qbsKIibOj4FOILA1WYUvpPzfxeWKN3JVgf5PHXeCLe2HFT_nUL7prZu7tF2_RbgexqZXou48sRc3g1rwpuCES3eRdmsOsfMN3m8UL-Lcelti8ledSKRS8bFxxT6Pg-jY_A1-JQDkziyg9lL2LUOi0AhPd9lnu4f_AUjtRh0qWgqvxGYduQ9scOH9qdIURCbfZvwxfSJk-ehuzEl9KlLVvQaDl5-h0ySzS91twivgmpBv7RIBERczz-fCE-cdYugzFfX3yWtaseX1vHXw1pbF2Sl4PFjsSBH-YmY-mS3Q; 1P_JAR=2023-4-24-20; SIDCC=AP8dLtx9QewJSJm9zidchqrzaTqVFvfCd-VvVZZWdRIUjteP7HltQpTiP-T21Xbzp00Nvki6Eg; __Secure-1PSIDCC=AP8dLtzafzs4a1pkky-xXuKPgWZ-_EySPOAE2Nxt7KM8PtUqot9GSuzXzm70-U4sViqOjBaoMxw; __Secure-3PSIDCC=AP8dLtyTBqybpYT7LKL0bdIj-V834-qptrEoo5Azpqal5ejuQy_z9ZSVsI7Tgju4n79T8hhK5_FJ',
		Referer: 'https://translate.google.com/',
		'Referrer-Policy': 'origin',
	},
	body: 'f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22test%5C%22%2C%5C%22en%5C%22%2C%5C%22ln%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AJhH2_GCirhMY9mvkL8GfuLO2gAH%3A1682371678913&',
	method: 'POST',
});

const text = await res.text();
console.log(text);
