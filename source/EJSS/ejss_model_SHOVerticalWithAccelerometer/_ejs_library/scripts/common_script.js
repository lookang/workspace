var _isEPub = false;
var _isApp = false;

var __base64Images = [];
__base64Images["/org/opensourcephysics/resources/controls/images/pause.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMyWLrcPEEABaWrs+ArrO7ZMwzLSF5RtjXr6rxwjAZqQKOeW6YUz/q6Xs7XABgXxpDMkQAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["./SHOVerticalWithAccelerometer/VerticalSHO.png"]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACiCAYAAAD7sPBpAAAAAXNSR0IArs4c6QAAQABJREFUeAHtXQd8VcXSn3RIQhJCqEkg9N57FRFEURApVlRA7O9ZsevnE/vTp1hRREXBAlgAEUV6UekgvRNqICEBkkBC6vf/7+GEm5t2yznJTTzz+yX33nP27M7O2Z2dmZ2d8Zo9e07uwYOHxcfHV8oDeHkRSy9JT0+TbTv2i285wbs80NbC0aKAp1IgMytT2rdtJr4HDhyWO+64X7w0TuCp+Obh5e0tcubMWfn0s8ny8GPviq8vLlhgUcCiQIWmANnTG6/+C/Pd11cxq/LCsIi4t7cXJEIfyc3NwZ/FsMrbSOWiw7/cXJGcHO3Tvg98z/xjGf2T310FNW58KJtrdeptu1qf9VzpU8DPz0+c0gPB24oFDkIOQEfBkfJZWY7WZpUrDxQg4zh9OkkSE09KpYDKEhkVoxgSx0J2tsbIWOb8+XTJghoQHFxFUlJSsLL6SWBgpTwmx/IEfbzpTI2fBL0+fue1jIwMOXY0Vi102TnZqDdEIiJqiTeYmFxkhDpDtH2Wz1vgORQogQVdQpTSzJ9//iUXLqQpCefSHe1bLt72uXPn1ADLGwG4pQ8CfSDpz+Xk5KqBGBoaylL65bzPbIzeatVqSuvWbfMGZd5N60u5pYC/v8hPP3yuGFDiqZPSqk1n6XPZlZIQf0rq1qsHRnYazOW8YLjJsWOHZOeO9dKseQeJrtsQY88ftssLUrNmHUlKTMT381K7TrQaY+fOpUpQcLCknU/DeMmWM6cTpVbtaIxVb41hXUiX9euWy7Ilc+WKAddLWFiEdO/ZX86eSZLKgUFyHs/XqBmpmGRCfJxERcfkjd1yS+wKiLjDDCszM0uSko5L06aN8CILilG8Hxd3APfrYsBcul8Uw8rIyJTY2J3SokVMvvI6jbMgWh05clhatWqrX7I+KwgFOD5i6jcFI/GS2IO7Zc+uLZCussEk6suO7RvBTKpJh0695BQY2ratG6RKlXBJTT0rGzesUs80BwNbs3qxBARUkiuvGik9evaQr6Z+Kpf1vUaWLJ4DphevyvUHY+rUubtkZopUCQmR4SPvkqNHDsiIG8fK3J++kXlzp8uB/TtV+dq160rjpq3l8KF9YF4p0qBRC7nxpjFgnhWE6BWkGxcFa8d644/lMSAgQPz9C/7xOgeQ/T3teuHlK1UqWF5/nnVRDbCg4lEgG4vRwQO7IDXVA0O5TKpWjZBx9zwt+/ftlKioBlAHU+XEiWPi7xcg7Tv0kKrh1WTblnXSuUtfuX7YWPl781/SpVs/uXbI7XI66ZRS61q07CBTP39LSUlNmrSChJaDBTYeKqBGPy6cGRnpYIyZknEhC9L9GbVQDhsxTho0bCEjbrhLqYx7d2+ROpExkNBO4X7Fo31575FTDKukzlLto0Hc9s/Hx1sxOYrmttf53YJ/HgXIBKqGV5fBQ26TqwZdJ40at5ATJ4/Kp5+8Kk0g4WRnZ0GCz5XMjAuQikLBdBLkUOw+adOum6xbu0x+hDrZum1XqVwpEMzIW6lzmZCC2rTtBiZ0Fgyul2J4fn7+YDpJ8vuCuVDzNEMoJbqgYJogvKRS5SBIbqFqUQwKqiI50BqioxtIi1adFDOLjm6oVMl/3hvy7B47rBKW1A0OhqSks7Jz5z414Fie19LS0mT37h2wRbW7uLOn2auoQl64kKnKlFS3db/iUIDq2ZCht4FR+EP1gqoGpnHPfc9LSvJpSDaRGEO0YV1Q9kuqiW3bdpcsMLHQ0DDFlLLAnapF1ECZDGWfInO7cEHUovjqG1+pz6GQws6cOSW1akXLudTki+NOIP37y+ix49XvQdfcpHYMfbCTNLLO3cIdqDp1aLfKhSoap54lrhZ4FgUMY1gcXDExTaRXr8vVbg+7SXF8374D8sYbr8u4cY+pwaR3PzubRvzf1YrKFc+Cfw4FqO5TRSNQ4goMDJSgoEBIQgLGVFVJNrzu5+eLv2BVjuVDw8LUSOE9Mh9ew5qoPvmd5gd+Vq5cGXVGq7qDq4TktcVxxnt6WVbM75Uq0UVGG6+8FhlJOyy/WeBpFDCMYbFj9I2qVMlfDTz+5vZwREQEXn4OJK3zsFVUUfc4yLhLSDXRgn8eBcgcbIG/9Wv23/OVAxPRH7Utr5exvWb7Xb/Pz8Ku21/Tf9s+Z333DAoYzjH4svU/CF0QsyOkZ8++MmHC04qBsdvafX3oeQYhLCwsClgU8HwKGM6w7LtMO8CLL74se/bskm+++RZiu30J67dFAYsCFgUco4ChKmFhTdIWUL16sNx770MyY8Y0ufXWmwsrVubXNDWVW99ljoqFQAWlgOZikQ0No6B24eXljetmGM68Ltr5CrbpLpm5qUYorD/u1s3NEGwCK23Mti5TGRZNVLBxyvbt+2Xy5PfluutG2LbtMd9J98zMXFm1/DGpU3ubtXPpMW+mYiGSkBgtUXXGSWHuhTx+VAXHkIzef8rB5tZ57NQHBwcZTswL2J4ls6I/paGAOhOTUqRxs955myR6/aYxLB7BSE09L++885589910ufnm2+WBBx7yWAkmLS1XggIXyPBhO3TaWJ8WBQylwPoN7aVli25qEbev+NjRIzhXGW1/2e3fOXAJiU+Ih5tGHbfrsq8gJSVZ7fKHhYXb33L794qVq5VLFHd1bcEUhkVmtXnz3/LQQ/dKXXgzT58+C35YzYFAQRHPFpmy/E4py8tLM7BReNaEXeDrAFLOlC2qOlfrcPU5Z/DQ29CfcYQmLGv7nCM01csXV7+jZWzrKOoZ/breL/3T9ln9mrufbCs311/tjuenjFYzNs2VtKKrWe62pz+fjYrNctHgTr9ZdZNGhdHCcKM79fRjx+Jgsxoto0ffLV9//Z00a9Yc3seey6z0l6t/cnAdOSpy+Ih2hb+L+0tMEjkRX3yZwp5n7fp1+NFCdL/0W7/OT0JRvyHxyznQ1r6MbXn9u20Z2+/6fX7a1scyhEOHNdxw/FMOxObHxfZZlrX9ffS4RsOERO16corIySLoxGdxrlnYhm0d9nXGHhI4kuYvY1ue3/cf0Maafh3+yapu/Tc/CaznHGjO98w+nk0WSQMOFnguBQyXsMiw9u3bB86bI2PGjFFOpOXRY3jiuxjkGMwffiCScEpk6zaRLp3BmE7iL06kWzdc20qnQ5G4EwIPbZGe3bXJ0qULJjYmDVcf0uMUnu/aVWTvXoZWEThJagOiTRuR1WtEatcS2bFTZNcukbFjIJ3+LdKhAwMVihzHpO+MdlPhFb4TZRjip0N7kfUb6CiJCYfr8+eL/Oc/sMOB6W3fIYLABOp5fq8Cswh/8x20RXvrN2o4t2yBttdyQ4SuJ1pfWB/bXLFC5NlnwRQwszm5f/hB5LqhcNwMEfn2G8FiRLsk6sO5dNa7A+106qTZK/l7A9qoHiGyaIlWf6uWoA+Y1i/As36MRjvSh/3CUMnD7ZNPRBo3EmkO3Lhg9AA9ST8y5E2btGcPg7HAKR0H4+lwSrODSCM8Q1qHQzPhu5o2TeS++0V2g14IACErVmp9ueoqjc6diSve2/JlGv379NH6T2ZJkfqhh/BpgUdSwNdorDhgu2DGNm7cDHarkfLWW+9i0NRBKBBtUBndnhn1cbLwqCOZERnJt98KDuViAoChcMJEw9Swbr32m+03acLzcSIvvwIPbEz6detwb7dIazCIQ7HapCWz2YSJjBMmStpERBNZggm9f7+2M9m8uTYxX30NFWLSLFyoXW/YUGOUf/0l8ttv9PAW2Yh6TpzQ6OmLN0ja8pmjwPuD97UJzwm+AUyNjITlOfGbNdO+t26t4Ug8YeKQbmAM27ZpdZN5URq2BW6eaCqz1r8PPtAYLyXLJYs1Oi1fLvL8cxpz+PwL1NlVYyw4zifLcO/oEQ3fKsFwc5mgMYw1YNZkfCNHasyUzJdMe9UfdDgWOXhQ5I7bNPqvXi1CxkJmxWcOHdLeBfvyB8oTbr1V5MsvwchA2+XLRPbsBcOfiffTWN2Ge42G6yowsGee1qRG2LplL5gmgSYLhOBSTBrktMADKYChaCxwx5YRF6ZM+QorXyMZOvRqMK23lae70ZsJxmJ+qbbff9eYBSf59OnaJBk3Tpu0deuK3H67xhwQfknIUCjZxEPyovTUHEyB9ogOHcEs8EdmNgITch8YU+cuItdcI8KVntLJps0CY6jGACkd1I2mOg2JAROMk473Ro/W2qUEwYnNSUuJpv8Ake5gNFQjyezIVHi0hdcGX6tJeoMGoU7gix1zadhIY5Zsl22QAdaujfsxmrpEHHv2hPSHPpGxkZGxTQJdPU4lQPo6C6aaKtKunSYlrl+nMc6mTTVph2Vr1dRoQGZzFuVJC0pDxHHECE3aPHtG+8177SAtXjWQT0KCqg9GBqmJUtFNN4MhgSkRGoMexJVMn2ol+0NaUEK76SaN0ZJpp+FPLYzZmoTG94NjiYiLpS0aJ/GOFK6gLaFGDa1uehNwoa2J37zP73rftZLWf0+hgOEMix2jh7sfQoO8CnHhs8+myfr1a2TQoMtl3rxfPNtx1Et7LVQzXn5ZgD8kp6raYH/6ae0zOVm71+9yxljS+tqqlUhHMCdOeKpwVLc4+DlJOVknfSRyNZgUpQaqMQjNhDNzIjdjsvHgLq+RkVCyGwBGpJgWGGGDBlr9xIoSHJkY1clrwZB+ngspYrnIsGGa+knGRelrwQJNyiDTojpIvMhEcDJKYsC82Lcw9IltkxFRNSKTDays4dWgvsaM8aoQ30yjx0DgTjXr/ffQj6s1nCnZsd/8TcmOE51AJqQmP9qsh/aoGl7eV7MRff65xmR69dLoRFWREp0OVE8p3ZHRvfO2yJVXanfIiMmkyLRYvg4+ydjI0LmokE78TjpHVEM/0Qf2h8y1JvAg3am29++v4apLXDXxDBkr6Y9z14phUkX9eZ7GWL10xKxPj6GA13vvTcodNeoeiPzFvx6ejl+16lesvo2x+mBJsgPeP348Sfr27Z93lpBFKMJz9f/11/mwizwhY8feA/eGf2MlzMGEm4/VE8upFGybh6ljY+NQ31X5nMdY11mM6CmfT5Ghwx+CTQczx01g11NScmT39nYy+o6thdZGKQpncRXQMK2c2i6WtMXetpxeESdxUdF09LpYFsUUJWhL8QfdigO9rG0ZMryNm2BvGmx7Vfuu42Dbnu33gk/kv8L2+NrZb4ItjrbfeY/GbF8wEnvQceD1osroz2ShLdv8Ihmgv38Jr9r+Gdt3odPLHlf9ut6u/W/9uhGf69a3lxbNN2DRsR0xWs1HsLJFRUWVOA+dxSMTq0dCQgIYvc3K4GwlRZTnPOQ8Dad6YDCsWLlGvPyaQGCoquY/5+g7bz3iXEx3V3DiaksYPHgQ1KfmUAuuhpp4A8RxLH0eBD4+OZAoGsnatViOARy4BA4tNYjxhequGmr6d/VDu66XZQGW04GE5ktldAp/cCHbe+oZ1oHy+dqwq0Ovy/ZTX18yLmSID7iDt7cWcaAGpJS16wriwGcV/myvkO/aVe2/XjfDETMCAkG/puPP34V9zyt7sU/qYT6vbmjP0NkwE2FiaDqwB9WOIsal+tWjNu3ZP6P/5rNZ4IQM3uenc/wSaKu3xyYJ9r+1q9p/LspcIF06tI8+p6S2Vgu4bZ3Wd+coUMKa5VxlRZWmlMXVedmyhYpjVoHllT4cpQVUlQhUgQiU0vh3Ma6bupaTw1jht0ibNiPUbyP/0YE2HcaViAjjV6L4+FNYsYPwBx0IwAmnMxJ3+3DkyDGoSpGKVu7WZft8FkShkzAoRUZCtzMYkpNTwQwzEU8Leq/BcPJkAtT5EDh+FmS0jjTFeUAV1gLXKWAqwyJToKF99+4DsAe9iM+d8vHHX8C2EgTbDThYKUBubrYsWrgAK6OfdO/RDwPGR5IhysYe3CNt23dW9jYOIiaS9fdneBzjkSKz1mlhdO20v/DPDLz1uo3GmfQwC2cuQpTqzaTHRaHTULLQJFOSWcaVBrUkHEq+deXxYp9h3YWZh4p9yMGbRdHCNIbFl5qUlCyvvPKW/PzzTzJkyDB5++0PYWwOzpN0HMTd5WKUNi5AZeLn6r8WSctWHeF3VBUG62kwPqdIJzhWZWbmIBHBfuw+JauIEitXrsS5q2BIWzUhqbgvBZLw52FJpjpBKcuIOnWCsO4kOIDx+IIWmM59fG3rjo+PV/gWNXj0ss5+UkUm3qSF0fRg5iZKWIx0a3TdicjUwzN/PDtnZN2kH+1MRtOZ9ZLWp7F9bQatU7GDw/qNpjUZIXEOr1GQ0ZrCsKiCrVmzVh555H5kxWmNs4RzYKxvoLacdbWMxDQbyG8Y+rZV645IXLBGuVZs33Zc9u7ZLuHVquN3FiQfHwlRUS59oUZUg52tobLbUPQ3CjiJyKxYvxlAlZBRO40GHm6tjq07l2w2xSDDGOucQKzbaCAzIcMywxBMnDkuDD/sCyJwQSM9jGZapAXBDFrTvkmGRcO40VAFW9yFLQqGMyyqV4cOHcVO4DgZP/5ZueWWG5WIbu+MaHQHC6uPklU63NXnzf0WAy1M4o4fwme4DBtxp2xB5hVOxNxcLzCSCDCpIEmMr2bKbgoNtfwj8zQazK6bOBvNsDgpzaQHB3p5pbXRDIvjzUxaE18zaE3TTWFgCsOK5YEvwMiRNyobka1xuzAkzLpGCYuZg4ePHKe4daVKejxvX2FaKFiWVNO0qVAXN0sfN6t/Vr0WBf5pFNBmrIG9pgTatWtnlSVn+PDBOHqyXzk70uhcFkBmFAT3bTIuGta52kCKxXdKV2WBkdWmRQGLAq5SwHA2Qibg4+MvkyZ9DsbVTW64YSjOcL2kcsbZhbZxFWennyNO9szJ/rfTlVoPWBSwKFDqFDCcYbEHlGq8vX3lueeeRRz3HyBl7cMZun4ya9aPsBWVeh+tBi0KWBSoIBQw3Ial04USDA3tTXD6d+rUL2Xx4qXyxBMPS2zsAXn00fFqx1Ava31aFLAoYFHAEQqYImHZNkybFsN2DBhwucyc+QuY16c4EHxC2ZBsy1nfLQpYFLAoUBIFTGdYRIC7+TR0z5v3E46nVIffRgjURsviXdLLse5bFLAokJ8CpqmEbIauFLRZbdmyA+Fa/oOgc8dwNGcqdu0CS+1oDvGwwKKARYGKQQHTJCwyqiTExR0/frzcccfNCNnbCUd0FiGcTGPlSFoxyGf1wqKARYHSpIApEhaP5qxYsUoee+wBxD7viZjgvyDIWpQytF88KVCafbTasihgUaCCUMBwhkU18ODBI/Lww/fJ88+/jPhX16nDzmVxNKeCvCOrGxYFLApcpIDhKiEZFqMn8hzfoEGDVcypsjqaY71liwIWBSoWBQxnWNrRnC5IENAdqemvROKAXSr2URFnGSsWNa3eWBSwKGAqBQxnWHQYpZf7++9/IgMHXi2jRo2Up5HBITHxVKEpuk3tnVW5RQGLAhWKAoYzLFKHR3MYtmX8+Mfk++9/RnLOM8j00h8546apzC5UFy2wKGBRwKKAsxQw3OiuI6AfzalXL0Y++mgSkl2uxq7hv2HfOiRPPfWcciTVy1qfFgUsClgUcIQCpkhYtg3T4M6jOb16dUPk0Z9xGPor5LE7YXhQONs2re8WBSwKVEwKmM6wSDb6ZdEY/913XyGiZyTC14aqgHoVk6RWrywKWBQwiwKmqYREmDuDZFbr1m1E1pz/IPFDqsqaE4i0vKWVNccswln1WhSwKFD6FDBNwmKapZMnT8i//vWA3HvvWLn88v4ye/YCiYmJsY7mlP57tlq0KFAhKGAKw6JUtWDBQqT2GqDST/3880J56KEHIXH5WcyqQgwbqxMWBcqGAoarhFQD9+07iJ3AR6AGvg13hivVGcKyPJrDePL84wYAXSoY7oafTDnG3UwLLApYFCgfFDCFYcXFnQBD8JI+fS5XTIKxsMoKyKiSkAAzPv4YMuW0QYLGs7Jh/QrJwi5A78sGqRxzSE0I6c9H/ZmBJ9NkGZ0qS8eTdC5vdRNfM9JZkSblmdZm0MRsWheWO1Afm+58FkULwxkWpZZu3brAjaGvDB7cX958cyKO6bSHkV0L4udOJ1x5lpLUgt9mQppKlzZt20BFrSRVgkNl6dK5csWAa+EPliO7d22Ts2fPyD58LloUguzUoRIVFWXYTqZt5mdX+lDcM8ygnJycrFTv4sq5co/ZiAlGM0QmUiXeZgCT1rJ+ZiM2Gpj5mfUzgajRoGd+LmqiutoeaaFnfna1jqKe0zM/c3wbCaRBqWZ+zs31QVr692XKlI/l7rtHy2WXXY7oDY9LTEykivNuZOdKqosqX/8rh8va1UuUB36VKgHYDDgq1w4ehR1Mf2VTi6nfRO1gZl04DGbbTUlaTAdmFPDFMouyWZmfmfWZ2Z+NBivzc36KUppgRuLKJqR/0mltNMOyMj/nf4eF/iKToBp43333woY1VCZO/K8MHXoVdgv/LXfeebdSEwt90KSLVPcCkZvw8KHDqgWuOvXrN83bAAjAlmZWVo5SD4ODgw3HgplxmdLbjAy5elZfM+s2WsLipNTxNprYrNfMzM+ks5m0Npphkb5m0pr4mkGPUsv8rA9AMi1K5TVr1oK09basX79ZHnzwXni5H5EXXphQakdzeK4xNDRcevYaCAkLPwBXX3MTiIytTB2AKwe5Wfq43oz1aVHAooB7FIBJ2lygpEUVt1OndjJjxjz58ccZpZ41R18F/GF78Pfnnw2zMrf7Vu0WBSwKGEgB4ww1xSBFGyU92z/99AOJjo6R6tWrlnrWHEp8Oth+169ZnxYFLAp4PgVMZVi0W/Nv1ao/5bXXXsRuk4988skX2GWphF07TT3zfBIZgCGd0yywKGBRwG0KmMaweDRn//5D6gzhtm1bsFt4P4L5jcEOnHepG93dppKrFXz4EXYf4K16zTUCsdLVWqznLApYFLhIAVNsWDQR/fzzPBk27Gr4M0XLL78slnHj7kST/yBm9fFkkXffF1n5pwReO1jCJn1iDTqLAhYF3KSA4RIWVcCdO/fJc889Ie+9N1n69euldgtN8ONzs+smPv7TTyJv/ZdcW6R5c8nZuElyr7tOZMhg/G5mYsNW1RYFKjYFDJew4JahvJi9vb2kbdsOyn3hojdBxaak3ruEUyJPPi3yxVTFrHg5vUN7OTtypICL66WsT4sCFgVcoIDhDIuB+rp06SQDBgzC0Zx+8uefq+EZrBnfXcCv/D3yw/cirVuL9O51CXf6dTz6iMiBgzgn9Pul69Y3iwIWBZyigOEMi63n5HhjV/BN2K3uQ1iZe2Fwv1tiYw+qdF+UwCos0F/iuxkid9yev4sUMatWFXn2GZFXXimbQ5X5MbJ+WRQolxQwhWFx3lLSGj36Dpk3b5HUqFFDRo4cDI/3iXBtyFWhXcoltUpCGrYqnKIWGdC/YMn0dJGhsGPhXKFsQjkLLApYFHCaAqYwLB0LGtrDwyMgVLwsX3/9PZjXbHn22Sfg2mDjxakXrgifU7/EuZ+rRenA9v0hF+eORL9+gtxn9net3xYFLAo4QAFTGRbb14/mtGzZTKZN+xEuDrNxnjDO8JAlDvTV3CKUrJYvF7ltVPHtDB8usmSpJoIWX9K6a1HAooAdBUxnWGyPTqRpaZmI2vCGNGjQGCpitYp30Hj5CpEaNfN2Bu3ofOln505auNO16y5ds75ZFLAo4BAFTGVYDEXMc4SLFi1BmJkBcvDgfpk8eao6gFzhIiMshdTUx2ZnsCjyUy3sP8BSC4uij3XdokAxFDCNYdGVYc+evTiOczPCyTwlY8fegySq3+OESo2KdzQnB/apDRtE+l5WDKltblEtXAaJLA2GeAssClgUcJgCpjAsHs2ZNetHufHGIdKmTVvYrZbIrbferOxZiJ1X8eDwYZGUFIGnrGN9a9dGJBB68vr1jpW3SlkUsCigKAD9xFigxrN9+x6ZMOFZhJOZLj16dKz4R3P+Wi0SXZeRAh0jJjNjdOkKXXlxfgdTx542t1R8vMiff4m0b48suNDpiasFFgU8hAKGMyw6hp49m6x2ARs2bKTiqFf4ozm0X/VywH5l+9L7X4HD0e/aXin779O/Efnv64gsUUPkzBmpAQbs9emnIg0blD1uFgYWBUABw5dP7WhORyRRHQ5D+xXK4M5dQhrgKyRQx92yxXH7lU6ELp2ZGlvkBP48AZ5/QeR/bwlOrIssXiTy+++S0a6DyPWwt5065QkYWjhYFDCeYZGm2dle8uKLE+Sxx57Ced8n5Y47bpNdu3ZVzKM5+w/ApypDpFUr54YT42PVqi2yGupkWcPKP0S+/VZgbATj7athUy1cTj/9pOQO7C9y402C/FZljaXVvkUBcxgWnbqZh/CGG0aoWFjNmjWX224bCY/3V0HyHEPNIlRBaeQvztRC6c42jDu/GybxrVol0rgxjOjYFnUWeveGNAM7VllCKhjRgw+KvDRBpA4YqA14ZeAl/hdhcsKq4v7LNnesrxYFyoYChquEtt3g0Zzg4BAcx3lGZs6cIytXLpMnn3wEzAWHgQ0App9KSjolC36dC5NLolQCz6DR3xbIyNasXiUrli3CGUZwUjDMpYt/Q/bn1TgipJXkp4+PL/4uXrCtoKTvf8FA3aNHsaWIZ6Gpsvr3E9m4kSl7in2+uJtF1l3cQ7b3uIg0bSJyM6QoO/ACXt5cEd59R+THn0T27rcr4dpP4mxGOiti4zY9iumSmXWTHmbQpLzSuiha2E3vYt6Wi7docGd0lcaNG8gXX8yUyy/vhKw5T0qdOnVcrPHSY3Q+ZWJLLxyofmXCg7AV15Khw8ZIkyatlLGfzCoh4YTs2rkZEpa/HDvaCIeyMyQu7ogcPrxf6sU0VinADsXGwishWfbt2yt//PGHSkrKA9slAtqvvm27nB00SC6cOCFeRewuFJX52ataNYk4kyxnsCuX0aC+kEE4C8ygzMSezib3zMUE8YNtqtqMmZIw/SvJjosr0L6e+dkLRsjgqwZK5aeelFMffeh2tAnmaGQWZTPAzMzPpDWT4lqZn7U3R1owdV65z/xsPxBpdE9NTUd89/9DAM5WyFVYHR11fnLa10sunJqaInt2b5WGDZtJ85btZOFvPyAsc31M4CAVFeI8bC+169SVsLBq8NNMg9NqpjRt1lbi44/DLHMe18MhmVWWjMwsCQkJUSnqOfmrMhxMSQCjuS/EyLDu3SUHzAeySKHAF5uOaA0RERH578OO5duyhVTdtk1yYIQv6vn8D+X/RabNrM/OZn4mw/L67HPx7t5VqnXtIrkYePbt52UjBuf3+b/nxbv3ZVJ95y6RnsVLlPkxLPiLiWw50KsbFecefdFF64DTpyXTpCzb+gLp7OJQkAIFr+TRmn0xEMzM/EwhgItPeHi4gRhrVVEQKew0jKkSFjUsqmiM7/7mm69JTEyMfPzxFypTbGam+2ohO+TvHwipaiwYTR3FoLr3uEqpdxRWMCeU1LVo4U+YkNnSrccARYQ1SFvvj0SqvfsMBHW8cLaxFjYEwuRsYg2pV6+e48TfBxUJjM23Ns4QFpjul6phZtwiMz/36S2+VCvvufvSA0580zMRO519l+FuqOZ98IH4aTpxgVb1jMFUK8BtYev6t/i99T/nd0TtauZCo9dtd8u1n+dhe1iFjQMsNP61YYcLr6rGmGuVFf2UjrPTtC66yrw7et1FqUJ5BV34otftwqPFPkI6cGyYQY+izDOmMSzOgbNnz8j48f9WqhZ3DK+7bqjydmcEByOADCswMBDSRSDShmk1knhkVgR+BgYGycgb75YcNFoZ3zkgIqNiQGR/HMqurJgaGVsOGJqeGVp72oH/PI6DmO3FMasSa4F0JtOma9EbgHupwZy5YLZhIpCwHAZGovjoI5HNm0XatXP4MdMKQkKWl17SHHApxmPyBCFqRmWEpMYKCSZbzbSmrYrLhgJYOs0BLsrjxz8ICaiS/PrrEmTQGaqYilHMSsdal6Rsf+vf+UlmVKVKCDa6qio7FhlaeHg1bAZUUfdsyzr9nQbzTh2dfizfA82baczq4MF8l039QaLQIRSRYJVY6mhjwcEiw64X+XCSo0+YV47+a9deK3LokNaXVSsQ3meppH8/U9JobujXTwvjYx4GVs1lQAFTGBaEGNhssmTHjq1y770PwTYUqI7nlEH/VJM6U+On7Xe38MmCmEgmwyMs7gAkRIHBXdaUYriZrVs1Z9DBg53H/M5xUL9Wihw/7vyzRj1x+Aiiul6pHW/69hu8g7ZazRh4WZGRcmESNgZe/I/gxD0cYOEEa0GFoYApDItMISjIV4YOvQES+7PwycpyaiEvF9Q9dkyLttCoofvodoNauBJMoLRg1g8IhdPHNd+xutEiXaFGfvZFaWGbvx0Ve3uMCMwL8sZr+e/xFwz6XvSnuR6S4MefgGmBwVKF9XDIdcWlxsP7ZAZ6pjAsIkrH0UcfHQ818IJ8+OGHKi6WGR0oszqxswdrvUB8dB8F+nFt3w53AahqZgMnPDP33Hij6y3d/4DID2B69FcpbaADK4OsvfhCyS1fBSnsdZS/+RYRLjCeBAi9JNiMkk+gmi9ZIn6xUG2pmlhQLAVMY1iUsgIC/OTpp/8jc+bMgkqYXbHeB0PDOHscp6hX0aoFJj88zo9A1TEbiDfnBc8yugpI46ayAM3/zdUaXHsOE1u+/U5kCia5j4NDdxQ2Cq4fhl3Y+2APKIUFoaSeMbku1dlbboUE+LEmWb/2hlS/6x7xIp4LLRW2OBI6+NaLq6LoezwXXLNmbdiNciBxXdzGK7p4+brz9xYY3DFxjQBKaVFRpRMfa+ZMRDy9wv2zSbdiwk2dakTvHauDbhiPPynIHycSWcexZ/RS/4E0lnxW5J139Sul/3nsODJ/X6fhP2Y0AjiC+f4CCQtOu7JwgZyc+a3kDhgg8syzIiNu8DyJsDCKUdItZVXWVIbFPjrtKlAYYTztGn0ojh4VadPaOMy6dRNZscK4+gqriZN+BWxlI0cUdte5a8NhI4qNxXGdfc4952rpDz/CYfFamMyQQpwFxvWaPFnk/Q+QYq0M7FmML9a/PyRyjBcmKrnlFp5Zy9eLnLAwkfshBS5fhmMhjUSuAPOaPTdfmTL9wfR0a9bCFPAjInqAjp9NFZ8FC8S3NHe3QQDfMiVCeW2cq2U2xEdnnExL6mvPnoJY0to2plm2DAYapL9SmzYlYVPyfZ4EgNOrfDUNvlAvllzenRLckaQBnVm1XYVmTbVEtrS/wf0BPi6u1uTccwsXitx1tyZZFXJeM68yuprQjsJD9K+9CoYFKfj++7ETvV/kkUfyipX6l8WQBOknuBUaBQ/rMlZajQi14VQZ7yX3VAIcdeHv1revyK1gxEZsQhXTScMZFueaPt+07zSY8BoPd17CxAyP3ku1m/wNoXKU53dwkHENtQUTQeBDZRymemgGzJmtrfRGifF0G+BkfOapwnMxGtUHhCqSawa5L9HeCXx/gnf/W29rOBuFX1H1cLKPuwuq8xeCQ7RFlSr8OtX2X+dDosTmyMFDIhPfgWOszQQq/Cnjri5ahEgdb0KVxpgcCRX1ySdwSB5M3waHVOzGZp+Ml/D9YKqUvJirgFrHw4+KdGxvHC42NXnbfHfrK0mZgXN6Kdg5SsVRiUt/5+U8VJFUu+spMDJnw7u8XALtV02aGIs6JRaqPMwebQZQjf0DqgmdLY2CDh20sNDcdTQLtu8UWbpcsHvjfgtcMSdO1BxNcWjdVFi9TnOpwA6508xKR6xhQ+wggnHsBg1Gjy6dXJaUZsfcCa/vxzXVddkykccg4dHB2YZZKRQ5psJCIQ32wwkIqIlQEaUVFt47gCvdSfbsUcWM/GeYhOWFVTtl7x45lJwG/CDaAiBTSTb8G564dpgkLF+izh3lXryXA8fL02cQ4aB5Y3XwVj1QXv7R8dLZFdORvnXGzh1tTEMGO1LauTJkstwedDRRhiO1cwCPumh8H3qdI084X+bll0RuH4XdG6giRgDtQ488LPKvf+NIDxitfTwiI9qIjdVwfuN1LBDXuFcjj0/NhmR8M+g8dITIjG9g/zJQsrfF7vsfRJ5/XgSROWQppEMuoiUBVVkdatWEJAZGN2a0Fv576PWav9z4x0Sqheul3PrMJ2HpKpv+6UzN2dC/64WGSdeYBtK1bn3116VujPRu3Exuu/o66Ybr/K3f616vvoTiPF8O9fbyBJQKeRzESIO73v/esGNtMknCYjTRHt20xBJ6e0Z8Dhsmsg8qAf+MBtLi7781W46RddM2RLV44ntG1qrVlZwC1Qgq1FhIKTfh0wjAoW6ZOUOb9IOxmBkdmoc43weaTMDigMPw8s47jjGrovpWo7rIKy/Dz2yuSBwkNi7uH30M50xIZG5CHsMi30hF9EmeAUxDvjw9LIUz9SvmQ46b7w8TnJEr813LUVJVOWNVGikSTmnhghs2cIY0jpXlgeJE1A+7gKFA2jOy6ZAhhlarKkNkBGV8//JL4+t+GYN+7BgVfcHQyn3BrD7ExKS6tmOHcVXzoCzVoc4dRJ56wrh6WRN3Or/6QnOlGXgV7FqxxtS/bj3OXV6h+QFSqqJ6ZxRQpaX9btIkkXlgXszbyXHC3WoXIY9hcdPkhReeQAC7lfL44w8gP0JcabtYuNiFUn6M2/iI1YMT1MY3TM95hnEx+ijJbtgSUlJFunU1HmfWOHasCKM/wE5pGKyFDYg2kLtgtDYDuGvI0NDcNaTDoBHwFOxspDMTeZgFb/4XEtwIqG1gWkuXud4KF7H/va2dArjvPo2RGKS2FUCK8dPmzxf5v//TcgdcBsb1GtTl4lxiitjFzWNYVOV79eqLEMYPYjfPW+rXj1ahYAo0/k+/QFsQVw5X9GZHaNexo/HnCn+DMZTSGwL9mQIdO2ihXH5FO0YBpSsyK0dzPbrS7oP/0rbqqQq5CzxiQ8//774232UCyUHkDTCuO++E+jZR016cwX/LVhFKab/+KjJ3DuqBFFsacPXVIr+BRswTwOQtPB7W/0qc4XtM5POpwGWe5qf2w0/iu2ix0C5uD3kM60Im+jD4GsmCf9GQIcMgXXnZl7V+kwL0RzHCj6koavbqbbzH+wIMkiHXFtWi+9fJvMdg0E/+xP26WAMDGh7AgKbkZiZwQvCYDzMGkam7CpQu//sGDOKohxJyacBQqPfzfsYfJvmVYD6USAsD9DGXHumEI0d5wFdjFGRY3NVr0Vy7V5r/KWFNmYxNj4WauwSdZpfAZDFlCuxor4h8/bV403WI9ik7gFyFPT28N2+Mj4jpgXD9WKniR7mhZto1UcF+7t0Lv5SR5nWK0krcCc2wirDLbgM98rlVzUFiJgwfBv+m/2kTx51zisTx5dc0I7CdN7gp6EdFaoZmqoacQPVjnGtmxSrg+m9NsmrV0rln3S3dooXKHymfYKEYNw6414eKdzNsaJ0wmWH4xi6uF2yuAczsRA/7tbBX9emlMSpG3ShroFllQH/tzw6XjLWbxYsH9e1AY2H47x2PHd4fsTmAnT4f34Kcze65f+ZPRLOEL4aWZcYsCjDVFiNlrt9gTAsLsXI1aowdJgOYX3EYMa7XTRDx33+vuFIl31uyTDsEPmZ0yWWNKjEQaglDVHPHk8ltHQWeHBhzB3bA0GcygrIAHgLXj/QwpM40qKQ33KQd7ek3QHywuIZO+UyLjDt3trbZ4AnMqiRaMdxLIeDLa17ZsDs2hM0UUi2DNSITlgWFUeBgLEJQ+GsOnoXdN+oawyYz8Bwnkrsw/xcR2g5KA+hJftnlUOcOakEJnW2Tu2wv/kdzVHQlz6Oz7dmWf+Jx7P6mwm8I/mQM+1I9wvbupe96lAjGw3/oEfgbwXBtlg/apVZL/kafqdFgnvxjPLD4BDWZs6qGSgImf52aNUuuoxyU0EQpMKgcLMAZg4CxVznAuqxQpMNodF1znA1t+9Svn8i6tdrZMtvrzn5HWiqkFALjG+Dsk66V5y4ncy0yFZgr8N0MrJxgWjyTVhbw4ovAH7S6HH0oxKaVy02LsynY7XoBnvdPiXwzXZPKygLX4tqk31Y9jNP69bQdbS4EFQSUhKX6AqblVbgUVq676g37HHkwd665E0o7K33OClGPS+4nnRhbtii5nLslaMdKSRZhKGAOPFeBXvM1a4nUdaMOZ9t++GFsuUOioyd5DCaMo4B0bPLGGyJvw2mRL6qs4OWXcA6uI0LZQOIiAx04UHMSToiXkOUrxI9n5lrCVsUdtgYNygpLx9ul+0IFAu8K1JcCXSFzijt2FJFgDqvD+YcPxcriRfNl7Zo/8nklsJxDmZ+5c+FCDHenMwZzKx8nAVTqqgK9yn+h2Lrp3X4lJpyLwAPqKsWXM8/T5WPESC3yRBHPFYrz2xO185mU0NyAQut2tr7rhyJe1VIcY2ot8v0sbPvfCc/t18Rn3z7xfud/2FWEnchgZkW8zQgIYAg9iqCfmXUXRYsyXMqKoIJBl+l3lpGRLdO+nCidulyGDZS6EhpWRU6eOCZHMg5I1249VRYfxuvatRPZm2FQ37truyxdGqZ2SSORzEBP5AiBTHxgB4iAxJMEW0FmIVmSi0O7qMzPRT3D+N7BOPoTgKMNiZjAXsWI9IVlfmaSVB9ILNURh+nULTdLlpP46njpmZ85MJ2C226VGoOvk+Rf5ktap44F8GciVeJN+uZCmqoM37ZQZPGJnz5NcoGrEoGdavBSYcMyP3MVo6vG7bdD2oUaCDUrETGhghCepxJ3XQ2G+Ph4VWNRE9XV5kjr00gua0Zcugqb+dlVYrv6HCfC7wvmIRV9Ixl83W14YaeUXqiyP6edU+nsdZXQG1u/UdENwMyQnfncfghQHaCR+CK8c0AewyIeXvDK9UGKsKo4PJxbuZJTk4qTiJmfqzm6U0eGc90Q8b7nHqkeFFzs+T/2lVmfmZ8xD/C8F45ceMNzORxexrlwBHaFCbicjRgGXh8YsUMQHTSYYUp88rfPpLLEm5mfcxHZw+eJJ8UbXtARvXpKLpkz7rkCnOx8bzxWZlg2YtSpnFeBUw7qDcEph0qMKWYwkNbMDG4GwyKtC2QdNwB/PfOzQ1nSnWiPNCiTzM9O4GhoUXa4ZcuOUiWkihw9AnUwoJLs2bUbal+ASlkfHh5qY8PyUslWc3K0zzA6sRUG++B/VbuW+KFOZyEDYTg4SfmCHQYVL95L/BlriLGyigDmWeRfgbp/mi0yeIj4+QcU8WTJl/WMwU5LWKx67BjxhceyPPc8/LP+m68xrvq+oAXxlmcehSrYGH5EYwW/CnUWzPdwCT9UnShTgB4lPOfI7SJp7cjDJZQhrYmz0QyL9RU6PkrAx5HbrJdjwwxal0rm52wMxIwL6Rd9I7QuK4Jh1cuw80TNhUc9szGbBTVr1VELdUz9pmgiV2Xv8fX1g1PwyAJHx7igcxXiX5GwaYtIs+ZF3jb8Bt0nunRB3G+cwSqGYRXaLgMB0o+LO1llBWRGX0+DDe1KbP2/BxeABy9hgsmZSzUTkpX8CV+mhTBgW2BRwAEKGGbD8gEnPwx70Or083kSvTeuJZ1OQjifmTJq1J3ix4F6EalsbF+f8/cTngBSvl8OIOtMEX1zhCsX0NBW84sVFMeXimxjx3ZILIOLvG3KDToyTpignfx3xo7EyAyMTUTJpSyBvkwzsNM2CMeCDh/WwsREReLYxR4Je/ZZnNpPg78ZmFVpHWcpS1pYbRtCAcMYFqWlWg0bSSf4EEHQUkC75f79h2Xz+2/KG32vgN3SL4+ZkaEkL51/0RgIjmIiuMSgbPHJRIc44Ur76EVPOJDSvYE5EJ05v8icgTxr5glAprnwNy0yAAO6Ue0B8/Vr0xZRDbAzGGRje/MEfC0cPJoChjEs9jIXXCgHc5t/BC+IUz4w+PpDyskBF8vJsmVYWkwsraSH/z9xgluOhm9ll9hrOgAyKzQjTjrKsBjcjf5ir75aYvWlVoBn3D54H5mGjuFo02nJblBfEmAiiLKYVam9gorSEAwJ5gE3U7Zs2QiJKxsqmaG80TykC6uZ3uL0jQoNKeyuuddGDofahEO5uo5bUmtUwRhv3h2H05LacPU+1EFp3Upl7vGys2m6WqX13D+LAqYxLF/fXESLmIqF/gUEBnwFW8GXpKtyR+ING2Fwb1Y2aPfoqUVoZCr7kgDb7vIlDN0MAezJ4LaO7smds3AzkwKmMCwauTMzc+T99/8nvXv3RYLkTiq0DSUu3it3sHGTFrKjLBCvBLcE5iz85tuSW2f2Gob/7du35LJWCYsC5ZACpjAsLqC+mDiTJ0+ThISTCBbQD7uEN2HDaCYYWYY6z1duaMUdhNhYkQ7tyw7lu+/S8ukl4AR+YaCvAh9/rAW9I9OywKJABaSAKQyLdKKLVfv27eSrr76RWbN+QRTT6+Wbb75CVNTBQs9vepiXCzhyVMv20ahR2aHLw7ZMZc9U64UBfba2bAFjPWhMGvrC2rCuWRTwAAqYxrDoNkS3Bi7+lSsHSkhIKI5NVFJHVOj1XW6AjIAJTksj+mVxRHnmac2n6cTJ/KVIYMa3fuxxSFfjBITOf9/6ZVGgAlHAlK07eDFAikqTH36Yg2QZc2QfjrXUqRMpgwYNQTbrm3H2LVDZuMoFHZkGCQeRyxy489e7lxaC5Z2389DJ5RlCJmygxMqkChZYFKjAFDCcYWnOoocQkeNmqV07CgEcr4c20wchmSJVmCOc8Sxf2XgoYd02yjOGAM/lDbpG5CUwqOefUzhVgaHdfxp2BlesKNs4Up5BIQuLCk4BwxmW0lBwnjAOGV+7du0pzZu3AuOqDT8sLYieo+5EHkF35tk7BmdHI9O7u9MxBsRbgKMsoxDyhJllsnIk4PAh8WIevPox7tRsPWtRoFxQwHCGxU21pk2bIiDjchjcP0NWofvVoeIOHbpA2hou3bsjhAh2EcsF4zoIIzaNcc5EzjT7tUdHI9olDkS/8y4iXzaXRER1CIKTaJDZ7Vr1WxTwAAoYzrDYJzKtevXqyUsvTUDssyxkA9+CTOkL8Ps5iYqqh8S4k6AewinL02EzjrigHzz/5lHABA3PPqWhdOqUdmyIIqwFFgUqOAVMYVikGTcCybhCQnyhUXVQgdUOIDnmn3+uUG4NYWGYdJ4Oa9eWrf+VI/QpF6KqIx2xylgUKJkCpjAsGt6p9q1CAseff54t69evUYG+LrvsCuwaLkXkzQjP3yXMRjiJDRtEEDXTAosCFgU8gwKGMyyafE6eTIDt6l9y5kwSEg73k9dff0datWqHsKe+Um52CQ8eQGiXcyLt2nnGm7KwsChgUUDAXowFSldxSCSwdOnvONI2QEaPHgdDeyelGjJCS7nxGWV676aNkdct2FgCWbVZFLAo4DIFDGdYDBjQunUbmTNnERxGd8n111+NYznXyv/+NxHB/A7AllVODkAvWmIdInZ5WFkPWhQwhwKGMyyiSSmqc+eO8umnn8tPP/2ObEn3gHntlrvuGiXPPfcMXBoycWQHntmeCmnpIjt3WgzLU9+Phdc/lgKmMCxSk+ofdwkjI8NlxIjBYFQvgol1wwHoL2HbOltqDIseCTwqpANVVtrZioWtCElMN4GyjoleLJLWTYsC/zwK2Exl4zpPhsD5vmfPfvntt3mybNkiGOJPwr2hHaL9/o58dBFgaNiFMxEowGVkXJA/Vi6VOpEx0rBRM3UQ+8SJOBVHvnbtyKKdV5cs1ozttpzODVzNzJBbHusujzjz9ZuNtxlah9k4F5tpyo05UxQtDGdYZFbMojxhwnOyefNGBOpsgeS5NLz3wRGdqkrqop3LbKCtLDHxDOJxnZCtW9bKff96Dtl5suXzT9+QPn2vkejoSCUF5uRky57dW4DzGdmzc6vMXxgmDb7/XmrefY+kMZa7m35OJDwzPzNRJv+MfMGs2zbzs9F1m5WNmNE6iDfBaJyZjZh5D5m41ui6ExEvn/UzkaqRdZMOpHVRk5T3XQXS4syZMwpfI3EmrinIiM2M0mlpaYbSg3UT56rVC5qNDGdYVLloXJ869VO4M0yE/Wockpf6KubAMN5uzn+H3htfzO8L5kMdrYs09b1kxjeTMRhycQxvrmQggGAymBP9xAje3j5IN9gWAxExunwS5QocffEDg8nBRkEQMzXrBbXiLv3nAHcq87MTrXDAFMj87MTzxRXlQGS2aq7SRgInEZmWw5mwnWicST0Nzfxs0zZxZkbiykwOYjDo48NopkVacD6YQWsmUiVNjM78TNJyTBfGYA1nWJSe2sF3afr07xHTfZJ8/fUX0qJFaxk48Brp0+dyqINhmLwGv2276vjSm7doK/FQQ9esXirVa9SWbVu3SEz9JkiFdw5ME7sCNuCFzD7880GoloDPPhO5epB4MwaWQeBS5mcH2zYzG7GeMdhohsX69Lod7KbDxVgvwYxsxDrOZtZtNMNifTreDhPRwYKVK4cqhmUGPQICgqQwo5HhDIt9Zdr3wYOvRWjka2HH2oNzhL/D2D4VZwjflBtuGCXjxt2DUgXFPQfp5FCxmjWjhH9Vq0YgZX0Yggn6YGUMQkKZ1iByllJN81VE0XDfPkRD+A1ptebku2X9sChQkSlw/Ph+ZGBbiXQATsxJFE07n6ZUwqBgHL2/qLEYQSfwWEzFk9Kwyd0FqjOFYbEVSlHUJNq0aSIdOjSRsWPvRAadl/H3f/DNGinh4dULIGPkBV31jK5bT8ssDYJSuyMxmA26gKaHZA/eP/wIf4yupZ9/0MiOW3VZFHCSAoePLJSo6PskBD7SzvAdziVCgbmkXXb5P6s9cbKmZGbdo+arbf2mMCx2hBlyTp48jbOEy+T33+cjYsNWSDy1ZNq079UuIbPqlAZAxc4Htp3PfwMhnfm67qX0Z4FFgX8OBZgwhmk3q3hQjKLAQP/SUQnJrC5cSJOJE98Ds/pJIiIipF+/K+XBB8erOFnUvHie0DleXgqDBwbmrFtHCXKSlUJjVhMWBTyLArYLOTQ9dSLFx2avRZe8KP3o3/Ue6Nf4iZiSwudYHzeCI7hvheu8h30tBdQgzyE2JrUgnnwrtD77i9qjYriERZvntm3bEPvqWXn33U+hCo6B7UhjUlQT6UzqkQAK51YLLyfnhjySghZS5ZgCZDLH4cWzfLkWr5J5g+l0zflMAYM5WMh0Tp8RqRqmMRkyJV2D4fN/bxWZgj2rdyeKMONcbKxIr94i1w1G4N7jAhu25sR9440is2Yidyl4wb33au0VwZ8KUNRwhkUP9/bt2+Ps4Edqh3DGjGnIA9pHrrxyEHYPO4F5eZu+S1igl45e0A1fjpa3ylkUqCAUoOZzYD/2m2aL3ASGgsjbsmKlxqyqVoUtui2EDXgA7NrFiMICdyURxo6cMYNJk5EfpQ+Cm5zVMmXFJ9CvTHC6RcAHNIa1fr120o3+kZ9MFrlmkAjzp6xZozEsR8loI/Q5+kjJ5by9fcE570bnF8pTT70Ax8lz8swzj8mwYVfhbOEc7Ng5yk9Lbqs8lODWstHb1Xq/zazbaHcGHWd+mlV3eaVHWY8PSkqRkSKX94Wqhu9kOjfdJFK/gZabFykaYOIR2KG1Y7a6HkcBhQyLmlO/fhrzgaujks7IkHwuikSUxvibwXJZljZual68XhjQtFQYGC5hsREiAZMQkAqAZHUZ0ntdBs/VTHnllQlyzz13yMaNe2DbqlEYPmV6jQ6NZgA9gulgZwbQi56TP5CjwWA4ffq0SiBicLWqOnq6MzmJ0UAHTP6Fh0O9NxiIsxl0Jpo8HVILvn/cwTYS6API8ecIrclAdu/W1ED4bcJ5E0wFjIVMh+RkaDgO44YNNQx5f+BAqIiQwPR0mOQ/MFsreP11jYEtXSZoX0teTkY0fJhgI06r6/bbtbL2/y9cyBGfgILczFjq2LRKDnr+fDaijm6UhQt/lZUrl4GR5UJE/AC7hNXQcVjcPAiIG5i2EkAAAA2lSURBVM8emgFJSYmwBcAgYAIkJycr6c0MT+YTOJrUCkkujAZOyiNHjkhLZrQ2GOidT5pEM1mHwXDs2FGpV7euwbVq1fFoTrNm0LUMBnq6n4Lu1oR5LYsAPz8fxZRqQXp67DGNUXH+Un3jYzSS1wU5yUt37NCu6RIQPyPrXKr47rs0KWr8eJG9e0Va4RUnnQbDA1Orc7FcdBTyp+A6JTM9v4u9QJWWlimVfUuNYWXDfjVDvvxyijo/161bD3niieelS5ce4MQBF21YnsWwKKUkgbJr1qy9RH2Dvu2DQyonKes3GuiYy2MMcXEnjK5atmN0BgUFG66+UdrcuXMXVmbjpaBjx4+pnAHnuA1lMGzfvhM1eit6G1y1bN++A6YSXzAJcAkDgWfyYg/FqroLr9ZLdu46ABUQ/YKERWmKGpL+hwMgkoupqjMoMq1Nm7RrKamCcUfpUCvP+nHSTamU9MGkXezPvzR/TJqH+Ztw+PClCCrMomcPZF67QOo2HS/ktauXMVzC4q7C+vWb5b77xsjbb0+CcW6sEi2p61JN5E6hpwFfjp+fr1St1lSOx1dWL8soHPkCk1JCpHJAZYlLqKy2co2s++z5qpKWCadX1G934sitZihxnr9QDfQIVBKcW5UV8nB6VnU5eqKSoXVzkiSeCZH0C34Sd8pYerBu0iPhdIicSTVWWuYYOXchXNHayGMuZDIpKZlyLi1cToAehVslvKRK2A1y+uxw/BXyooq6hLrPpaZIQmKcVIlviroLSkNFPVrSdTI2n4D9UL/hGWlXreEMi2ag5s2bySOPPClTp34iS5YskCuuGIjY7ldIgwb1FK5kXp4GnKBV4X3fomVrQ5kKie/nH4jVK1hq16lpeN08cxUQECiRUbUMZljcIUrHmcw2BVY5I95dOnz1jK6bTCX0+Ek5n5YqjRs1LGKCuoY9605Pz8BB+XYwKOOlGggcI+npmVAJ2+BdGjclybDOnEmBS0IoxnUrQ12KWHdy8jk5evSgtG6DuqHeGQW+EHrE2w9aiZ/5DIscsVKlIHnxxQmIMPoAYrsvVJ7un302SWJi6ssDDzyCjNDdVfQGozroTj2UCEn83Fx/ianfVFXFwWkEU+VA5KpWPaK2UgnZDsFd2z7xo2hOMbtatVrqcCurJu0LX0VVsw79U6sb8CaOpAdxpgTAnR/71c6hCu0Kkd7KdhHTFKqmRnsjaE2fIeIXgnOjVaqE5LXqLq3Zf+LMuuvWawS1xkfRA8dR3ac13iHpzfdYt24jJeWTJqSPu7TWx3WlSpWx+xejjqdRveN7dAds6eHnF4A8o/XzcHWH1qyXY5p1kCYx9RpjfPio8afTn3ijC8YDiU3Vryb2QMeMGSWzZn2DTNBLYAitj8PPQxCjKtFwu4grvSBh/vpjucz8bioGSTqOJ4Tg7PNcmTd3Fl5CtluSBQfegQN75e/N61FvIAZ3lnz79Weybu0f6sW4gi+fYb3x8Sdk2peTEIlilar79OlT8tXUSao99slVoP1ix/a/gecUHKuKk4jqoQr/r7/6BKoFo8S6WrP2XC6MIUsW/4oJmg28QxHuZ7b88vMPuAmu7gbQJvbb/NmyYvlCSD8BqD9Hvpk+RTZuWJ1nN3GlevY3NTVZjQ/SmvQ4cuSgTJv6ESSLI27Vzfe4Yd2f8h3GxNo1f0iNGiGIH7cGeH+KNlPcorW3d66sXLFYfvrhG4y7TAmGO/n8eT/Kr/gDe3SFFOoZ0iM9/bzMmvGlrFq5BIIJBgwm+9dffSqbNq51eVyz3rS087J0yW8QFDJk9o/fgSZa/SkpyYommzauQ/2+5jAs9o62Q06e3bsPy6RJUyFZ3YUkqsvl4YefQHysEPQTXK0MgURKgdVwz56talXesX2znEqIl6TEBBUzK/bgXrcGJCfn8qW/qPpJi61/r5XwajVgTNwMo3CaywNS4Z18GqpJe/nrz4WKgmtXL5F6MU2En7zvMuCV+OBc2VmkZ9u2ZZ1QitiyebXUql0XA/IPJWm4WjdXyb/+XCzLlsxVbRw7ehjqSqKaAIcPHXSZ1pz4iYknEf/se0lNOY1xlyubN/0l1SJqyfZtG1B/uss0odRGnA8e2CUJ8XHiDdquXbMUkmczWfPXIpdxJg05/Js2a4nF5zgmoh/wzJYdwLdGzUi3aZ2VlY3FbLFs2bIGO4TxcuzYYcUEz51PkWNHD7mMNyWgnTv+VkOAQS+Tk1OxKPyBXX+Gb1qHPrgmvpFP7N2zTVYs+wXOq7sgDebIyRPHMBeT5O9NqxVNtm1dLxfS08xhWBxEixcvkRtvHCajRg1TaeoHDBgk3347Rx5//HFICdRNy5Zhker0uwoMpG0pBhJWBo4KZEHFqoG/mmp3U70ZF/8xvtbAq0ZCPQlTPnYZmRcgmtdXIW6yeCbBRVDqQ736aoB07zFArWrZkFjqxTRGjV5KvXCxavVsTUyYaKg+Z88mKZXHF2I/1RVuj7sKGlM5DQnoF/HCDy4MWTB6hFWtrhgL3UncYbSk9Y033wvv7IOQDBOVhBUd3UD8AyqhHdelN+JEOjRs3AL1HlVmAq4H9aCuUIrLcWMIs+7z59JhXwqRjp26YLJnSgDUt6ioBlDbMPHZkAvAetMhrQTCZsp3mQoJRQtoWF0xFndcd2huiIyqByZ7TGIP7sY788LijnENWlP1pKTL9p0FqoFt23WRlq06Q9I6J7UQFiokJFzhTYkrCvVXDgySLKygYC3GAlfSzZs3QfUbLL17Xy4LFqyASvgtVMPblYpIVdEDeJXCgSog1ZMVy+YpKevUqRNy/PghrCIbMUnrqwnrDnW8ccAqNDQcUtV++LKEytLFs2H/8EF8rmCXaaBJKssQ9nkNIqcmYYXbCKe8evLDrCkYTPVdXj3ZT66g69eulEOxe5Q0yFUvNDRM5v08Hc6CLRRDc4UeZLJBQVVkzJ3jYWhvj92lZKVqxYHWlDgjo+q6RWtKPn9DEqT96kTcMcUEFkLi8ofvW3BwoMu05kRq1767Wu2rRdSExLYZwSAj5ftZn0pMA+QIcIUYF58hE6cqT0k5PT1L9u/bgUkfCDV5hjRu0kpJt65W7+fvhzFWFRKxPw4cJ0sGNk+OHN4ne3dvhS9UtMvvkfiwTh8fPxjau4LWR1SYqN9/m4WNpQAs/gwd7RrWfI5jhHbCTZv+hHR1Em5ACVjUqgnr57vkfa/33puUO2oU484UT35yulWrfsVOhra62KPF+8ePJ8E9vz8aOoOjOOMRhGsPYmF1hjfsIOnWrRcaDMgzZnOFWr58vjRuXA9VFWyb3Do2Nk769r0qHxH4oukVPOXzKTJ0+ENKr7XHxdHf7DLxIO4BWI3ZJtipuhYQgPAWrqv7eShQkmS91L8p0nLV98YMc/XFsmLWR4mQaicHECNK8vhTIFYhd+pl3aTJOcQtp90jIyMTeENd4YodFOg2PSj6k6akOemSAxGFnwEBfm7VzTFBh1FfX3+FP4216aA136m7tCbO51LPS6XKgUoqVLQ+d04YtM7d8cG+c95pYyRLozXwDsT5FXfq5jukZMkxQslHSYP0eQFT8HeT1qyb9qYAutEASYamIe3ZjrvA8eyDRZ6qJTc32Jb+LhmWeuJbjxofrYGE5qr88cdToENvh7F9DvyxXgcBs6AOPgcXhyvwnRMD2JQxcHJTndCSCtDmphGJaLkzYGy7xX6SWREqgehsk3/uAPH09dUGiF6fEcyKOLG+IBzNZ//JrAiVcezHCHqo9QD1keZ8/WQGBHfr5vOcMLZ05QDXaaO14tp/4sz+sy59mz0Qjrru4kxs9DmgjZGLtAbe7tZNXPUxwu90iiYjIBhRd2Uwb70Nfuq0Vg248Y/jgvhRWGC9Ougx9LG8GasScuVnZpjz5zMg8mfArb85mNQzsF39COkqWCZP/hDMKgNlMsBFLwA5YOcBYEscfrf9bSR6RtZrj6fRddv228i67es1qm77eux/27br7Hf7uux/O1tfceWNrNu2Ln63/V0cDiXds6/H/ndJz5d0374+29/a0l9SDQ7cJ0ePhe0jJ4eqyiX2SK7JrcmWLZuCgTWDX9YClMmFuJoF94Y4JKhofFEVc6ARq4hFAYsC/2gKGMawyKTCw8Pg5d6ogOREptWjRxelFuoZa7hzkZycmI+5/aPfhNV5QyhAexbBQ4R3DRnrv2EUMIxhESMyLUpP/MsP2QWkqIJl8j9h/bIo4CwFyKwS4k+qjYgwxDyxmJazFPT88k4xLO6m8XxZYcyGRnXeow3LEdsUJSw69RVVXkvF5brvj+eT3sLQaApwj2DGdx8jHlNNGXX7vXk70ka3Y9VXdhRwmGH5+/tC5asDr9mkvN0NW7QpXYWE1IJrA0Oo5JewaNKy3xQk06tWLarQ8qyXBvxateqq5/i8BRYFSqIA951r1KgjNWtFGWZgLqlN637pUsBhhsVjhz169CwWO4rkzojhjpSnC4QFFgUcpQCdLx2R8B2tzyrnWRRwgmFpJ6k9C30LG4sClyhAn6kWrTrKrh2bnFo4L9VgffN0CvjS9mTrhuDpCFM9pDpJlVF3QPR0nC38SocCZFh0nWmGeGwMo2JvhigdLKxWzKAA3yXt3l6zZ8/JPXDgcJ43thmNGVmnPghpsN+2fX+5wdtIGlh1WRT4p1GAzKp9+2by/2oa/ORGcVARAAAAAElFTkSuQmCC";
__base64Images["/org/opensourcephysics/resources/controls/images/stepforward.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAM6WLrcO0GAAoUYYL444XDKYHUZSA0fZYYcFV1O1QWYtt54HASdsMoumE4StKQ2xEqtAUSVQBmNLWdKAAAh/k9Db3B5cmlnaHQgMjAwMCBieSBTdW4gTWljcm9zeXN0ZW1zLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuDQpKTEYgR1IgVmVyIDEuMA0KADs=";
__base64Images["/org/opensourcephysics/resources/controls/images/play.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMsWLrcPkHIAYBTUIzbBrXcMghhF01l9pUFyBbbiwUxm2n2iXL3ytMVW1BWSgAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["/org/opensourcephysics/resources/controls/images/reset1.gif"]="data:image/gif;base64,R0lGODlhEAAQAIMAAP///5mZzGZmmTMzZgAAAMDAwAAAAAAAAAi/Z9z8qBIvQNz/0AjBpwAAAAQS93Ft5CH5BAMAAAUAIf5QQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgAALAAAAAAQABAAAAQ3sMhJq71YDrv5ANTwVUMwaiY4lSnausLIxupM22cxCLzM06FeTUgCaoyhnE65UjUxzkk0Q6VGAAA7";
__base64Images["/org/opensourcephysics/resources/controls/images/reset.gif"]="data:image/gif;base64,R0lGODlhEAAQAIcAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///87OzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAANgALAAAAAAQABAAAAheALEJHMhioMGDAq8URIiQhaCFDAleeRhR4kQWGDMeZHGl48OOICEK5HgxI0aFGy9eW7nSoUhsLq8ZjLmRhUyCD2/O1AkzJ0OeNE0KPWlzJMijIXUOFcoTG8unLA0GBAA7";