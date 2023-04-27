const res = await fetch('https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=6049192754589826213&bl=boq_translate-webserver_20230425.07_p0&hl=en&soc-app=1&soc-platform=1&soc-device=1&_reqid=81709&rt=c', {
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
			'[";mIa4htvQAAaGzQ0Wps1faIqCyMlX5YEmADkAIwj8Rrp91LVuy6PoIUncrnjOPcOToOu998pDtw0Eubmlm0_od2Pn1xpy02j5zOwsyW94wR-UcRUfAAAAik8AAAACdQEHhAJxdgccJWceHnYQVYU70yGl8-WWiW8tAaJfbJd2fN4gsGohru2uC0ok_ccNt_-yjaelivgvixgSEC_kq_M8k7hAG2D7Qoyb0CAZmxCabDoF939vJCmzKDq0UFCwvLOPBXPVuQYWekyS1Zwam2yaXVC3mwlL0s7s98a3Z1LKCelJAt3nTG27dvUBigOdvh1RU7rXejNFUmikBwGIVkn3QsVrUuyEN75JoaYqf5CxxMn08oe6TFiK65IVgCqm3mELeMTtG7vW8dDviQMB87dfu0UQjdG6ngSE0rXwYiVYJ8shZESDbmgp2tTyNEf4-ub4Pwa5t322MPxzTWoaoWZFeNIjNDeaQvREbh-YZ1UDo9CwaZs3-i0E4-1dsAs1gJgmpofcqftwLvBxp79Fclp08kKDPInjfEyeapFIPw9ucz5rjDqrOwos7XceAQBIbXJtpbC6VqrJbW6tHB5h--OmnReihVlHsqozBFJcSn_6aYoLR1zgjDMdI-vhmaTfSvKXBKGnXRj0wHGYBmeEdLfR6P_cC8IsO6-QuZHK2dN3WN3Oh7E4iaMjGh8fHWvPjGnfUWoCQSio5iPEu6jtwznCJPZqzxBwFlbAaGcsbJka_dPCZ7hEmxpSaN2XnP8KaWfH4KXofjsfbSvFsY2iwa7EaUqcG2sN-HdNBE0z2Er1-Z4E5c8_zUZ3klTJKyvYN88CIPFPzkFI8DLdoCy4dJjs_WpEZEqkHNj0A1Blni08nXnsGEvQQhoANCunT_poVVYrr54eepRBSDy7rpjHIu2DCzZsNeOP3vTNB8IeWCUwtw2CoFHKv5an2NEeccFPTJ-qFpqg0w",null,null,301,66,null,null,0,"2"]',
		'x-same-domain': '1',
		cookie:
			'SEARCH_SAMESITE=CgQI75cB; ADS_VISITOR_ID=00000000-0000-0000-0000-000000000000/104365501944649270586; SID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3jMAwFPEAKC04nXrNOYh-G9g.; __Secure-1PSID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3jMEFUD7gzF3kb_xM1PSjgQw.; __Secure-3PSID=VwiZdxJOKRolphUm9swul-4x4rgfRaa7vE3f1EITPUHvda3j2Jv8jl-UcdrGrknQhNBKgA.; HSID=ACZHeDyYYb4d8hRBp; SSID=ALipnPk6Z2Cn1lVMi; APISID=x-0CaJSexeMaF6z8/Adc7X7CAsNuJSgZNh; SAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; __Secure-1PAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; __Secure-3PAPISID=X3IhUFvjm3-Wayns/AuqJ17yrc6r79JoEJ; OTZ=7000933_44_48_123900_44_436380; AEC=AUEFqZe_1d5G89GJz-2SO7PU8wR8ufneGwf2t5psINpDYpfFkc1phowMZA; __Secure-ENID=12.SE=ppOQ-24Xl2g2VqMcWdWQutmoduv4xn282watFC7sOcCDQniHJs8RizmwOUuEqAKZ18ny9UB52v-eA87NzZETURQiXeOI2W_xnpe7mlSP5Di_h8_VxuTKbbDX0erCTJFr66KNhqe-7vFKcR3j0p5gNfu8uhlZFvVRO77wF4PT8qTIQ4RSw5sHI8v91ZNF8jlz0C28FCFBDgBXhlsoUoEj0s6rnBikKN0r55QhjuswJv1L8CKoRGRQg69A6xQ_-olN9wV-DEwrNu9gY9E8qsrA8mo1sNTE27IY2GIN8KV9UKogo3b_WipOjl1KUc7PY6N3njvvOOT7SofeojjvHboPpmUKxLw; 1P_JAR=2023-4-27-19; NID=511=ntaXQbs3_WkJDx0lnd4C0NrTYvdaVNMTmPKkQMP_0f4iGMm5BFRT8SonyMOlWSHu_Yu8ipTF1xY_Q_MLLF6gLfW1gRi7f4GsCh3B_rBKYup_KSZInx1FGx11LZn7OnckY2Cgv7hg7KWL-gBUNG-hwexRxhEJQk8c5LGYqJJPbXCfOaJZM54uGs5uYBRgQLeCqjlYjaF32x-21LvTycohE72aRwb9zcacjA7pS9nmjrZ-P8FzJFIx0P2G4oez_lAzKTSFVjLuZSRJUjb6rg7CoF1XX8SPZ1T7XbCP-bsL8D03J6ez8ZyhER0FLcr8o9hIeJQJKB9-D-MDA9C3GDej3UQiK-HtUqyh0UB1fmGugT2XNozO13Cdm-uV1Nl_tTfdREsDmUV2IGi2oOs51FusCEVSWFRw_UIhhZ9lh5k3sbHnJdN1jZp-bgAQe4NXVuomgiqRS3UjMflyMPB7vEXyUKZJT4xn7eoh_U3SFLDs0wzI6AOQfuDNgfZv19b1mdLRLox4lIJ1GmR7Jb6UR-V3eaK-vn06OWJAj7YhzUE0q32v4_eXtj3q0XKQttG59uBmy2eJ; SIDCC=AP8dLtz8LzgTqonCUqIZZsFdjoVwp5xMd1ELJ2Pa6SOFWCmPmxZjppNVeJijqCm-JfIDpScn2A; __Secure-1PSIDCC=AP8dLtxsf-x8CgcmaZnHL3IWZJSbAsJUDhIPTtuU9XKVNSeJCRMbKmI7X_5kHpkU6gmnBjVlEVw; __Secure-3PSIDCC=AP8dLtyDp-Vn7-QsINzDCRqg2uC-Bbch1th3KEShmhpdDWX_VTpn1746--oucQTSYxaYF71uY9yt',
		Referer: 'https://translate.google.com/',
		'Referrer-Policy': 'origin',
	},
	body: 'f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22some%5C%22%2C%5C%22en%5C%22%2C%5C%22iw%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=ABklwfa5HnoewXBLB2EC3vky4g3f%3A1682624508157&',
	method: 'POST',
});

const text = await res.text();
console.log(text);
