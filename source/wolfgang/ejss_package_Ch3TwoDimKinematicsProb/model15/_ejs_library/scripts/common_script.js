var _isEPub = false;
var _isApp = false;

var __base64Images = [];
__base64Images["/org/opensourcephysics/resources/controls/images/pause.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMyWLrcPEEABaWrs+ArrO7ZMwzLSF5RtjXr6rxwjAZqQKOeW6YUz/q6Xs7XABgXxpDMkQAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["/org/opensourcephysics/resources/controls/images/stepforward.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAM6WLrcO0GAAoUYYL444XDKYHUZSA0fZYYcFV1O1QWYtt54HASdsMoumE4StKQ2xEqtAUSVQBmNLWdKAAAh/k9Db3B5cmlnaHQgMjAwMCBieSBTdW4gTWljcm9zeXN0ZW1zLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuDQpKTEYgR1IgVmVyIDEuMA0KADs=";
__base64Images["./prob03_14/prob03_14.png"]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAC0CAYAAADl5PURAAAYT2lDQ1BJQ0MgUHJvZmlsZQAAWAmtWXVYVU23n71PEYdDd3dJd3eDdCvdzaFDBAQkFAQUFVAUVFRUECWlREERXgQUVCxCJETFQFFB7oDxfs99vvvf3c+z5/z2mjVrr5iZPWsdADiJ3lFRYSgdAOERsWQ7E30+F1c3PsILgAMsAA+oAae3b0yUno2NJfg/ry8TANnqfCC1Jev/ZPvvHfR+/jG+ACA2sNvHL8Y3HOLrAGBJvlHkWABwtyFdMCE2agsvQMxEhgpCvL6FA7cxHmoPmHx+YaFtHgc7AwDwqgBQEL29yYEAkAwhnS/eNxDKIfnBPoYIv+AIOCwRYm3fIG9I42iFPDvCwyO38CuIxXz+Q07gf2Bvb5+/Mr29A//iX7bAkfDFhsExUWHeSdsP/59NeFgc9Nf2xQ9bYhDZ1A7+MkG/VYZGWmxhIsQNET47rSFmgLgjGFr0Gw8HxZk6QrzFP+UbYwB9CSMNkM9+3oYWEHMBgFLFhTrq/cYi3mSItvlR/eBYM4ff2IkcafdbPhoSEbZza35AOWhqkL/ZH1ziH2NkD+lQBzQkINjYDGIYK/R8cpCDM8RQT7Q1PthpJ8QkiG/HhNpv6bAlZyw5yGCLvs1DjrPb0lkI0hcCyMZbNkIeDDE8BqJt+RgBX+/td7FBumJskIMppMOxGEs/f0MjiOF7MS7+EY6/9cEERcXqb8nZ4k+OCtue31BPTIl/mMkWXQDiMzHx9n/G9seSHbbo0G+YiRBv8635CnXGLEXF2mz5ZEufNWAJDIAh4ANx8PYBkSAEBA8vtyzDp189xsAbkEEg8AdSvyl/Rjhv90TA1h4kg7cgAvLE/B2nv93rD+IhfeMv9ddYKRCw3Ru/PSIUvIZvCMdyYLWxGlhL2OrCWx6rilX7M46P9o+eeCO8Id4Ub4wX/0MBvlDrMHiTQfB/oVnAPn9oHRm2EX9s+Fce7jVuFDeDG8dN4Z4AJ/BqW8pvSz2DM8l/NPgr2QpMQWm/vOIPPRYBFv/wYEWg1kpYfawW1B/qjmXBcgAprCK0RA+rA21TgtQ/3tvSOu6vbv/68o/f//Btac33Hzb+ppMkSEq/tfD5YxWM5B9P/G8p//YEAz/IZfG/OTG5mGuYO5ibmAFMB6YF8GG6Ma2YIUznFv6ts/G2dwL/vs1u26Oh0IbgPzyydbKLsut/nv7a6g0pWxpsxQDO/1j/xFg4/4BBZFQSOTgwKJZPD+7C/nxmEb7SO/jkZeUUAdja07d4APhkt71XIyz3/6VFygGgtrUH7/uX5vUOgJYQuI0x/EsTaQGAVh6AgaO+ceT4X/KwWz84QAVo4cpgBzxAEIhBm+SBMtAAusAImANr4ABcgQf0ehAIh1ongFSQAXJAATgEjoByUAVqwHlwGTSCFtABboJ+MAhGwDh4CufGHHgDVsAX8ANBEAJCgzAi7AgvIoxIIvKIKqKNGCGWiB3iinghgUgEEoekIvuQAqQEKUdOIxeQq0gbchMZQEaRJ8g0soh8RL6jGJSIMqHcqAgqg6qieqgF6oDuRgPRaDQZzUIL0WNoNXoJbUZvooPoODqFvkFXMQBDjWHB8GOkMKoYA4w1xg0TgCFj0jD5mDJMNeYKph3G+gFmCrOM+YbFYxmxfFgpOD9NsY5YX2w0Ng17AFuOPY9txt7GPsBOY1ewP3E0OC6cJE4dZ4ZzwQXiEnA5uDLcOVwTrg+unTncFzwez4IXxavAtemKD8Gn4A/gT+Dr8T34UfwsfpVAILATJAlaBGuCNyGWkEM4TrhE6CaMEeYIaxTUFLwU8hTGFG4UERSZFGUUFym6KMYo5il+UNJRClOqU1pT+lEmURZRnqFsp7xPOUf5g4qeSpRKi8qBKoQqg+oY1RWqPqpnVJ+oqakFqNWobamDqdOpj1E3UN+lnqb+RmQgShANiLuIccRCYi2xh/iE+ImGhkaERpfGjSaWppDmAs0tmhc0ayRGkjTJjORH2kuqIDWTxkjvaClphWn1aD1ok2nLaK/R3qddpqOkE6EzoPOmS6OroGuje0S3Ss9IL0dvTR9Of4D+Iv0A/QIDgUGEwYjBjyGLoYbhFsMsI4ZRkNGA0ZdxH+MZxj7GOSY8kyiTGVMIUwHTZaZhphVmBmZFZifmROYK5k7mKRYMiwiLGUsYSxFLI8sEy3dWblY9Vn/WPNYrrGOsX9k42XTZ/Nny2erZxtm+s/OxG7GHshezt7A/58BySHDYciRwnOTo41jmZOLU4PTlzOds5JzkQrkkuOy4UrhquIa4Vrl5uE24o7iPc9/iXuZh4dHlCeE5zNPFs8jLyKvNG8x7mLebd4mPmU+PL4zvGN9tvhV+Ln5T/jj+0/zD/D8ERAUcBTIF6gWeC1IJqgoGCB4W7BVcEeIVshJKFaoTmhSmFFYVDhI+KnxH+KuIqIizyH6RFpEFUTZRM9Fk0TrRZ2I0Yjpi0WLVYg/F8eKq4qHiJ8RHJFAJJYkgiQqJ+5KopLJksOQJydEduB1qOyJ2VO94JEWU0pOKl6qTmpZmkbaUzpRukX4nIyTjJlMsc0fmp6ySbJjsGdmncgxy5nKZcu1yH+Ul5H3lK+QfKtAoGCvsVWhV+KAoqeiveFLxsRKjkpXSfqVepQ1lFWWy8hXlRRUhFS+VSpVHqkyqNqoHVO+q4dT01faqdah9U1dWj1VvVH+vIaURqnFRY0FTVNNf84zmrJaAlrfWaa0pbT5tL+1T2lM6/DreOtU6M7qCun6653Tn9cT1QvQu6b3Tl9Un6zfpfzVQN9hj0GOIMTQxzDccNmIwcjQqN3phLGAcaFxnvGKiZJJi0mOKM7UwLTZ9ZMZt5mt2wWzFXMV8j/ltC6KFvUW5xYylhCXZst0KtTK3KrV6tlN4Z8TOFmtgbWZdav3cRtQm2uaGLd7WxrbC9rWdnF2q3R17RntP+4v2Xxz0HYocnjqKOcY59jrROu1yuuD01dnQucR5ykXGZY/LoCuHa7BrqxvBzcntnNuqu5H7Efe5XUq7cnZN7Bbdnbh7wIPDI8yj05PW09vzmhfOy9nrote6t7V3tfeqj5lPpc+Kr4HvUd83frp+h/0W/bX8S/znA7QCSgIWArUCSwMXg3SCyoKWgw2Cy4M/hJiGVIV8DbUOrQ3dDHMOqw+nCPcKb4tgiAiNuB3JE5kYORolGZUTNRWtHn0keoVsQT4Xg8TsjmmNZYKH56E4sbjsuOl47fiK+LUEp4RrifSJEYlDSRJJeUnzycbJZ1OwKb4pvan8qRmp03v09pxOQ9J80nr3Cu7N2juXbpJ+PoMqIzTjn0zZzJLMz/uc97VncWelZ81mm2TX5ZByyDmP9mvsr8rF5gbnDucp5B3P+5nvl3+vQLagrGD9gO+BewflDh47uFkYUDhcpFx08hD+UMShiWKd4vMl9CXJJbOlVqXNh/kO5x/+fMTzyECZYlnVUaqjcUenjlkeaz0udPzQ8fXyoPLxCv2K+kquyrzKryf8Toyd1D15pYq7qqDq+6ngU49Pm5xurhapLqvB18TXvD7jdObOWdWzF85xnCs4t1EbUTt13u787QsqFy5c5LpYVIfWxdUtXtp1aeSy4eXWK1JXTtez1Bc0gIa4hqWrXlcnGi0ae6+pXrtyXfh6ZRNjU34z0pzUvNIS1DLV6to62mbe1tuu0d50Q/pGbQd/R0Unc2dRF1VXVtdmd3L3ak9Uz/LNwJuzvZ69T2+53Hp42/b2cJ9F391+4/5bd/TudN/VutsxoD7Qdk/1Xsug8mDzkNJQ0z9K/zQNKw8331e53zqiNtI+qjnaNaYzdvOB4YP+h2YPB8d3jo9OOE48frTr0dRjv8cLT8KefJiMn/zxNP0Z7ln+c7rnZS+4XlS/FH9ZP6U81TltOD00Yz/zdNZ39s2rmFfrc1mvaV6XzfPOX1iQX+hYNF4cWXJfmnsT9ebHcs5b+reV78TeXX+v+35oxWVl7gP5w+bHA5/YP9V+Vvzcu2qz+uJL+JcfX/PX2NfOf1P9due78/f5HwnrhPVjG+Ib7T8tfj7bDN/cjPIme2+fBTCwRQMCAPhYCwCNKwCMIwBQkX7lXNsc8IiMQB6ICfCkYA5PALOIBPxu96DsaCw6iTHD3MKaYB/iwvH0+F5CKoU2JYHyOVUbdSWxiKaW9IyOjt6CIY9xgJmeZRfrJXYshzdnJzcfzwHeNX4/gUmhncIDojJiheJvJM12VEl9kTGQPSg3okCjqK8Uo1yp0qM6pbahwaopqaWmbaRjp+urF6OfZXDUsM6o2/iByaLppjmzxQ5LAyv3ncHW8TbZtiV2VfZ1Di1w1Q86j7k8cX3pNuu+sOvt7gWPZ57DXt3e9T4nfQ/6JfsHBNgGagQJBZOCv4S8DO0PuxB+MCIq0j5KJZojep38IqYntiYuOz4gwSxRMokqaSl5KKUh9dierLSEvdHp5IzkzPx9p7M6s1/up8zVzIvKrymYOEhVqFkUfuhk8XDJxuEdR9zL8o82H5sqp65QqvQ8kXeyserpaWy1VI3Tmb1nz58brV27wHfRsi71UuPlD/XqDUVX319zv36/2brlYZtme+yNCx3Puqi7FXqcbkb3Zt8qvl3WV9ZffCf37r6B/fcODh4cyv4ndtj5vvT9HyM9oyljymNfHjx62DZePrHnkedj/SfCk5STb5+OPmt6Xv5iz0uvKcNp8Rm6mW+zr19NzA28vjl/Y6FtsW3p7JvC5fi3Hu+M3kuu0K2sfpj82PXp9Ofs1aAvFl9l1hjXvn579r3nR/V61ob/T8NNgc1NGH884ICnw0TQB090lsgh5CWqAM9enzCemAl4anqOi8KT8C0EfwoOiknKSqpAan2iFo0DKYg2ne4U/U2GRSZmZkOWJNZ6tvcc0pxkrg4eal4nvov8m4J6QhnC3SLrYiriIRInJAd3fJRmllGQNZVzlw9UiFZMUtqjnKwSouquZqmupSGrKaDFrE2h/V3nre603rj+PYMuw2tGtcbHTHJNE8yCzF0tTC1VrUR3MltjrT/bzNiO2vXYNzicdMx1inH2cDFzVXDjdse7v4M7fadHjWe+V6S3g4+iL9F3xq/NvyggIFAziD7odfCNkOJQ/zD1cNrw2YiWyNwo12hJOC+GY07FkuMM4pnj5xPaEg8keSTLpqApj1Lr9xSkhe91TDfMUM9U26eVZZrtkhOxf3/u2bxb+dMFPw9yFaoVOR2KKT5Ucql04PDrMvQo1zHl47bl4RUFlZdOjJz8ckrgtE31vpq2Mx/OSddGn79+4Wud2qXUy131oEHv6r7Gvuu4JpPm3JY7bYR2oxuZHZ2dn7tFeuxvpvSevHXj9njfYv/Xu9gBxnv8gzJDWv9YDrvdDxpJGM0ZO/Kg+mH9eMfEwKOJx3NPPj/FPGN6LvxC9aXlVOB0zcziK9E5t9c58xcX7ixOL60tk94Kv9N5776S/mHkk8Ln0tVPX+3Wrn9n+5G9vvYzYTv+WEAPJMBOkA564LleHYlFWlAUtUJPoT8wHph7WE1sM04V14u3wc8SUig4Ke5QHqTypdYkchJ/0syQBmmb6M7SH2MoZMxlymbOYSlgLWWrYq/jaOXs5Ork7uLp5u3iu8HfJFAneEKoQDhOZJeorpiAOBB/KtEiWbDDSYpPakm6SSZd1kKORW5avk4hTlFHiVLpgfIJlSBVRdU1tS71bA0LTQbNSa1q7RAdeZ113X69Yv3dBhIGXw1vGRUZu5uImnw07TLLN3ey4Ld4Y9lslb7T0prFetqmzjbGTsMetb/nUOLo5sTnNO98xSXOVcMNdRtwL9plv5tl9xOPCs/dXtxez71P+Oz25fKd9Dvm7xTAGHA/sCDIKBjA+RIfKhe6HFYb7hPBFfEosjRqZzRF9E1ycoxCzHLs2TiPeNb4+wn7E3US15IakoNT+FKepB7e45DGnja3tzX9cEZSZsC+XVmu2e45/vvjcrPzyvLPFTQf6D84XjhX9LkYU8JYKnBY9oh6mcFR82O2x13LfSoiK/eeKD15qWrw1Ptq4ZqkMyPnRGvTzk9clKrLuvT0ilx9bsOLRuVrBddfNiu07G991q5wI79jpkuz+1jPl16HW019ov1n7koN9A2G/iM0vDxyZ+zqwwsTDY9vTj5/Dl7KTte+ypnPX2p5R/shd5VtrWndeSv+v2pvW98EvDIAZ2cBcDoNgK07ALWSAAhXwNIKrLPY0ADgoAZQ/SKAPDkOEJMrf78fNEAU5usBYD/MHAfAG4SEyCGOSDJyAulAniLrML/TQX3QHPQieh/9jOHE6GGCMIcwbZgZLDWsG3jBjKwV+wrHgNPBReBO48bxVHg9fCK+Eb9MECMEEmoJixTSFHEU3ZTUlG6Ul6gQKheqRmoSdQT1GFGVeIqGgoZM84JkTmqjFaMtp6Ohy6D7Sh8J8xVfhpeMPozzTOFMX5gzWEgsJ1hlWG+xubOtshdzyHE84Ezg4uYa4d7Po88LeG/yZfNbCbALLAjeECoWDhExFhUWI4qtis9IjEne3tEudU26QaZetlGuVb5HYVDxhdIHFawqs5qgupSGnKasloQ2nw6DLqr7Xu+pfrdBtWGuUaSxi4m+qYwZjzmtBcZizXLFamnnnPWMzbTtK7s39p8cNpwonVldRF3V3KzcfXel7D7i0QC/Y299SL4Kfq7+ewNqAvuCZoM3QhnC+MMlIqQjpaLEowXILDGUMd9jF+M5EqwSs5K6k3+mGu0pTXuTbpVxY59iVluO2f7ZvP0F/AeuFOoWTRUXl7oc0Tpqdjyhou8k5ylSNVrz7ezH2ncXluuWL7+vX726cZ2imbNVpt2ww7UruCe+N+12ev+eu/H3woa8hgtGWseWxvkf7X5S9fT1C7mpjJnxOcn53MX5ZZN3Fz/QfUpZfbsW8H1+I2p7/6AF0sAWVnzKQTd4hVDDaoA7kgUz/kHkPczu1VEvNBdtQJ9gMDBnd8VkY65iXmJp4K4Siq3A/gPzbzmcH64Sxp0Wb4nPw98lUBGsCCWESQphCjJFLyULZRhlP5UgVSbVHLU5dTtRklhFw0xzgIQnZdIC2gw6DF0uPYn+KIMAQz2jLuM4UzgznrmaRY9lhjWHTYptgj2DQ5ZjirOUy5Qby93Ls4/XmI/IN8FfLRAjaCzEI7QmPCHSInpK7Kh4sUShZOGOEqly6XMyTbJ35V7If1VkVlJX9lUpVO1Ue68hrOmpVaH9VJdHz0+/3uCHkZFxgcmgGc5cxcLHMsfq3M6b1pM2K3ZYexYHCUddJ1fnGJci1ytuw+4fdrN4aHkGeBV7d/m88xP0dwkoCuwP2ghRDA0OOxk+GolGyUd7kQtjbsQuxNMmqCR6JRUkt6bM72FNM9u7J70xY2mfYNbu7PKcx7msea75JwteHZQqTCzqL2YriSwdOiJbVnGMdDyvglh55KRo1Z3TwTXEM43n3M5jLzTUeV6mu3KrIbFR5tpCU21LcJtU+8eO9q7MHste1luzfQ13UgfMB9mHRoYd78+OJj/geTg8UfDYflLkGfJ85mX/dN1s0Rx53n6Rc6lqWfTt1ffaK8MfPT+9X03/Srt2/DvPj6oNjp9F2/FnBXogClaO7oNNGPsA5DjSh3xCBVA7WMNpQZdhrcYFrvcBLAbWDpOxLdhVnBIuHteJx+Gt8RX4JYIG4RBhgcKQ4gwlBWUU5TMqS6oeahUYaX3iEI0rzRIpjZaZtoHOmu4DfRmDNsMi4wkme2Ya5nsseayWbAxsk+xnOcicelyMXG+4+3nO8ObwhfI7COgJyguJCvOKcIpyiPGJS0qoSVrs8JZKlS6X6ZR9JU9S0FQkK11Rfq+qpJahPqYpppWl/VrXUq/FQNLwjDG/SY2ZuHmTpaHVY+soW6Jdg4M7XK+drvHuirvWPHq8Dvp4+CkHEAOfBJeHmoUtRiRFrkfHkudibeKuJdAnkpMepqinnk6j3puYPp/psm8oWz+nPVcxr7lA68BAoWvRm+K0UvrD1WUyR9uOa5d3V2qeaK7CnbI8faT65RmJswnn+s4zXwi42H6JdNnvSkcD89WoxsHrYjDzedtq29Zyg6cjp/Ndt3PPzV7JW0dub/aH3Hk4oHuvbojln5jheyOco0Fjlx4sjQtOOD/KfHz+yb3Juafrz+le8L6UnFKaVp/RntV9pTun/Vp9XmVBblFiSeAN6c3ictvbhHdK75bfn11x/UD1oeNjwCe6T62fd62C1eov+l9mvu5d41pr++b4beX7gR+iP3rXPdbXNkp/yvwc2PTbin9MgAKsQ8ILIerD8uOLzc1PIjCpKAFgo3hz80f15uZGDUw2ngHQE/br/5wt5q3/iSoh/b9f/wM+i81FNfrEEgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZ1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NDQ1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI2NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpphs9aAAAcPklEQVR4Ae2deZAUxbbGD8ww7NuwCsMq+7Apu6LXAAQVlKtCeAVxAUWfEaI+8RpGEBg8/8B4l5DrHwRhqC9QEQjDQFBCXEBF9kUWRfZFYBAGWYd9YLwvvxxOU93TM8x0d3VX1XxJNF2VVZl18pdTX5/MrMqs8B8ThIEESIAEfEoAElahQoWYrE+PKZVJhIsu+nKRnMk7IxkZGXY/1ryYjgRIgATKQgCCd+HCBXnwwQeldu3aVn9iEcEyC6Cq7ZUrV2Tb9m0ybtw4SUtLk7/++itmFS5LwYNyrjresVSaMkhEHpoXv0nALwSgNdWrV5ePPvpIjh8/nlwB1BsWN1+jRo2kfv36fuFGO0mABAJEICsrK+R0qS6VtXhl9gCdF4AXCDWuWLFiqAlcGkPUW1RvEnlG82acx53XjdyOvKbm5TwPcbATQY+XJp0zj0Rs67ULCgqsHenp6SG71Da1S8+Ndl2cc/XqVXsIeZR0brT0jCMBvxKAfqDVmZ+fH3cR4hJA3IR6s+r38uXL5dChQ1K5cmVrHG503KB33nmnjW/WrJn1GnHDOgXJuY2EzrxxruYfrcQ7d+6UDRs22Pz69u0rrVq1soLgTIPt/fv3WxvuuOMOm82yZcvsft26dWXgwIFSpUqVIumiXS+eOLUJnLANLqjIw4cPC9iA1blz5+TMmTPStGnTIpdSFufPn5d3331XHn/88ZAXrnkXScQIEggQAf071+94ilboEsWTQ0Ta1q1bS79+/SQ3N1e++uor6d27t3Tp0kVq1qwpFy9etCKlN/HZs2cFXiQKghv68uXLIeGDyp86dSokSEiDc9XrwT5CXl6ePP9fz0t2drbcfPPN8tRTT9l0yFPPgQhv3LhRYNv3339vr4H9WbNmyYABA2T37t3y8ccf2/wSAdVmVMx/EDf0W6xfv15+/vlnAYOTJ0/KO++8IwcOHLCpIMxffPFFMTkURu/bt09eeeUVWbFihY1w2+4SjeFBEvApgbg8wGhlVq+lU6dOVqxatmwZOg1iBU8P3ho+8HoyMzOlc+fOsmrVKitYzz33nHVvP/vsM3scovXAAw9IgwYNZPbs2dKuXTu5/fbbQ8IIcaubWVdwHYgjhNMpkhCGI0eOCAQD6U+cOGGFFEI4YcIEadKkidx9993Wm1JhDhnswsaWLVtk4sSJUq1aNSv4X375pcyYMcPasHjxYkH5IWpjx461V3fapNsoMwQSPzQzZ86Uu+66S+rUqRNi4oLZzJIEAkkg4R4gBAgB3hw+CBqHpuqlS5fk2LFjVvAmTZpkz/n000/ltddes03Q+fPnCz5Vq1a1Hg6agnPnzrX53HPPPQJhRVCPBzc+vMzJkyfLG2+8YZuEEEvnORisGTFihPTs2dN6obDr999/tyKE82666SbbbE5En4K9cAn/9ejRQ5YuXSrDhw+X0aNHWy+5Q4cO1oOFZ7h27VorZM4fjsjsNm3aZJvISI8fj5UrV0aewn0SIIFSEEi4B6jChG/nNmxBHxvi4AXCw8E++uvQ9wXBu+WWW6z44bnCxo0by4cffmibs/CW8MwPhApBm7bYhmCgWTllyhTbnHz77bdtU7JFixah66NfDQHii2vDhkqVKtltjdfmtz3Rxf9QZgSIMYLuQ/DAoX///rJmzRprH344tG8U58JueLdLliyxzz/Bm3ziiSfk888/lz59+oT6VpU70jCQAAkUTyDhHmDxlwoXLvQJIjiFBwIFkatRo4ZtEr744ov2RkcfIkQQHhoEwHmDo2mLNBjIaN68uRVO9Klp3hBLFUyICa6HZ4jgOWFQBAGDNvAIIbxuB7UHgzUQLd3HdXv16mWb++jLRHCWU71oiB7Eu1u3btaTxg8F0v30009F0tgI/kcCJFAsAdcEEP1UEBtnwCAGbngcwzYCBE2bnhgIadu2rRU9DEqsW7fO9tupMGHQYvXq1TaditqQIUNk+/btMmfOHHsuxAzilpOTI2+99VbI60MipME1EJDu/fffl0WLFgma4KNGjbLxmq/dceE/iBo+EGMM5avIoW8S/aCPPPKI9eQgeHoMNuF8xKHv77777rOeI7xixKNP9IcffgiVze0yuICFWZJASghUMDdLTO8CQ9wgUngTRG9UZwnQLIXIwTPTcPr0aevdwdPDzY9mL/r4kL5WrVp2RBfnYhsChr7Chg0b2oEK3OgYWcbjNej3cwaMpB48eNDmiaYv8sWIMzxBeEi4FgKuC9GATbgmjkMw8TC3Dt4483V7G+iV3bfffivfffedvP7663ZgyHlMtzdv3iwLFy60fZ0o39SpU2X8+PGCB0Lx44Byjhkzxgq95ut2GZg/CSSbgHYNLViwQLp27Wqf7tB7pKy2JLwPUA1AMzYyqHDpMRiN9/gQsA3h04CbGh9nwGAGQmRh0ZzGYzAacBwiGClq6G/TPjecixFofFIVnCI1ePBgwUeD85huQ+Aee+wxe4p6iHrs3nvvDT1Go3GaF79JgASiE3BNACFCCM6bUYXLeexG2848nOfazK/9p/Eap9dEvG7jmJ6ncbqPYxqH7VSGSJudtqAvVAM8YgS1Gz8O+gOh5/CbBEigZAKuCaDemM7La5x+41hptjUP57kaF5lHSfGR6SP3nWlTtV2STRBHfCB+TvGGrZEeYars53VJwE8EXBNAP0Hwi60liSOOlXTcL2WknSSQTAKujQInsxC8FgmQAAnEQoACGAs1piEBEggEAQpgIKqRhSABEoiFAAUwFmpMQwIkEAgCFMBAVCMLQQIkEAsBCmAs1JiGBEggEAQogIGoRhaCBEggFgIUwFioMQ0JkEAgCFAAA1GNLAQJkEAsBCiAsVBjGhIggUAQoAAGohpZCBIggVgIUABjocY0JEACgSBAAQxENbIQJEACsRCgAMZCjWlIgAQCQYACGIhqZCFIgARiIUABjIUa05AACQSCAAUwENXIQpAACcRCgAIYCzWmIQESCAQBCmAgqpGFIAESiIUABTAWakxDAiQQCAIUwEBUY2oKoavUpebqvCoJxE+AAhg/w3KXw9WrV4ssw4llORlIwG8EKIB+q7EU2qtrEZ88eVKmT58uCxYskNOnT1uLdKF2eoUprCBeuswEKIBlRuadBFgHWD0vfLv9gbjhGg0aNJCRI0fKpUuX5H/efFNmzZole/bssWB0fWIKoXf+TmhJ8QS4MHrxbDx/BCJTvXp1a2daWlpS7W3evLngM2LECNm6dat88803snz5cunTp4+0a9dO0tML/7RgIxdsT2rV8GJlIEABLAMsL52KJie8sWXLlkmrVq2sN5ZMoYGwIWRkZAhs6dmzp7UlOztbxo0bJ2PGjJEePXpIjRo1vISNtpBAGAEKYBgO7++oyFWpUkXGjh0r27Ztk8OHDyfdcAggBBjiV61aNSkoKJBGjRrJkCFDZOnSpXLrrbfaDwyjF5j06uEFS0mAAlhKUF48DZ4fPqkO+/fvt97fn3/+Ka+++qr07t1batasGTJLRTsUwQ0S8AgBCqBHKiIWM7QZGkvaeNNcvHhR1q9fL6tWrRI8FgPPr3PnztYbjDdvpieBZBGgACaLtAvXSbZnpU3Z3Nxc+eCDD6Ru3bry0EMPSfv27UOlQ7MYdiXbtpAB3CCBMhCgAJYBVnk/VUWtVq1a8swzz9jHYZSJeqP6PKDG85sEvEyAAujl2vGobVWrVhV8VPTU49N9mK3bKpoeLQrNKucEKIDl/A8gluJHihv2VQSRn+7HkjfTkEAyCfBNkGTSDsi1VOx+/fVXwQgw9jEQcuHCBVtC3cdACQMJeJkABdDLteNx2xYvXiy//fabtfLKlSvy3nvvyZYtW6wYzpw5Uw4cOGCPqcfo8eJ4wjywwkCS2x9PFNYDRrAJ7IFK8JsJeOVt7ty58scff9hHYVavXi3PPvus9O/f374X3KlTJ9sMbtOmjd+KllJ7tesAHjRDcghQAJPDOVBXwTvAo0aNknnz5tn3gQcNGmSf/8Orbz/++KOMHz9eTp06Zd8H1rdFAgXAhcKo+OFhcvzA4E2fRHvOENb8/Hxp2LCh3HbbbS6Uwn9ZUgD9V2cpt7hFixaCz759+6R169ahV95ycnLkyJEjMmHCBHsT33///fZVuZQb7AMDVADxjOXDDz/sqsVPPvkkBfAaYQqgq39qwcxcPROnwGEA5E0zNdajjz5qJ0EYPXq0NGnSxG7rzR1MGoktVaVKlWyG3bt3l3PnziU0c0xMsXnzZlsvCc3Yx5lRAH1ceakyXfuo8CaIBjwAPWXKFGncuLGN+vjjjwUDIwh6vt3hfyUS0B8XTDoLjzpRAflmZWXZ7DBiz1BIgALIv4SYCTg9O/RZqfghvnbt2jHny4SFBBL9w5Ho/IJQTxTAINRiisoQeUOpICIe2wiR56TIVF7WEPiP+ecMWkfOOGyXpzqjAEbWPvdjJuC8cZzbMWfIhAklYKaosPnp7OHF1RGEEZ/y8F43BTChf2LMjAS8SQBih35FhBUrVsi//vWvkJeOOBzHIzKY6OKFF14o9AIhhDjoCMWJpuMUX21SAH1VXTSWBGIncP78ebtEAZ4zxKe40LFbN2lpHnNqaZ73TDfC6AzqHUIIgyCGFEBn7XKbBAJMAE1aiCAW0sLKfs4+QAhBjlnIqpd5nOmPv/1N1rRrL3Ue/YdkmJHj7v36SVsjiNUrV5YM85hOEIRPq5kCqCT4TQLlgABEEMuZHjx4MFRaNHPrmc9l0+StYETwHy1bSsaunXLMPNa02cTvN58fzWp/Ff/+d7ntrrsk04zwNzXC6Fz2wJziy0AB9GW10WgSiI9ApBdn+/pMs/aqmYjhytGjkmEeYm9o1nUZbARTTp+W42vXyjrzechcNtd8/j19ujxslkTFs4XwJCPzi8+65KWmACaPNa9EAp4lYHv6/jIjv5XSpapp6pqZLuR3Y+2f5gMv8MB990nnYcPkw2bNpL1Z+wXPfN5oNNkk83ygAHq+imggCSSOACanqGwErk6dOjbTwnHeCpKOx17S0iTP9BF+eOaM5Jt+v31mjefOQ4dKPzO7z1DT7G1ilj0NWqAABq1GWR4SKIYAxA9v7GCi2qOmmRst/Goiay5aJLeb2WLqmyZwJdMnGApGJP9yNHf92uwNlcdsOErnjOY2CZBA0AhgMoSzZ8/KnXfeKcOHDw8bBYaY4d1tnDPCNHdNp16o+BBOHMenoiM+dIKPNyiAPq48mk4CpSWAgQo0eyGAfcyI7ssvv2xnnY6W3g6ImPMRrOhhICSggQIY0IplsUggkgDEDAGPwmBbBzEizytP+xTA8lTbLGu5JqAvtjkfgHZuKxwVSt0P8jcFMMi1y7KRwA0IlCexi4aCAhiNCuNIIMUEMCmB9dgKu+KsNRCry/mX5fifx4u1DgMWmKgWgxmR3l2tmrVsOjZ9r+OjAF5nwS0SSDmBgoICa8PWrVuLtUUFDALn9OCwX7VqVTvri878Ei2T0+bNDoZCAhRA/iWQgAcIqJBhJm2srQIPEN6cBogb1gvBUqTTpk2zj6xkZGSICibOwwPOWJvl6aefls7mbY1ID1AnQ8CypQyFBCiA/EsgAQ8QUAHEu7WTJk0q1iKsxDd16lR7XAUPOxA3NHvxkPPIkSNl8ODBxebBA9cJUACvs+AWCXiCQKTnBqMQB5HThaZsHOLNBw+3ONNABBGccTbC8Z8KriOqXG5SAMtltbPQXiYQTZxUzHAMDzSjH68ymsWmIHacxExkkJ5WeDvv3bvXih/ORbpo+Xm5/Mm0jQKYTNq8FgnESQD9gjqIccIInFG4wtfWzGb6tQns9+zZE+dVyk/y4L7jUn7qkCUtBwTUi8MoL/r4EG43YjjMNIvvNUL4gBk9bmAGSdp26GBfd8PMzww3JkABvDEjnkECKSegAohBkv/74AP5cP58ec2I3KemOTz3ppvkf42FTz32mPy8YYNkm1HeTZs2pdxmPxhAAfRDLdFGErhGwI72mmmq+vToIWdMXFXj9dU2XiAeja5q5uuradb7yDbz+B04cIDMSkGAAlgKSDyFBLxCQAdDqpnJS1cawTt55Iidsh69flnXnu/rfsst9nlA2Kyeo1fs95odFECv1QjtIYESCKig1TOvu9UbP14u41wzg/OFtm2le9euNiUept61a1do0lMVzRKyLbeHKIDltupZcD8SgABC0KpVqyZdTTMYTV+82LavdWupZ5rGCJj1GUtfHj9e+M4wBdBiifofH4OJioWRJOBdAhA0CCFel/vNmJlmPtXMWr5Vrk1fj1fk+vbtaxxD9BIylESAHmBJdHiMBDxIQJvBWWaFtlMDBlgvsL8RwEqOd4MxWrzBjAhDLDFwQi8wekVSAKNzYSwJeJaACmC7Vq0kv2dP+cZYmtWgQZi9WLR8x44dwucBw7AU2aEAFkHCCBLwB4EMMxJ80TSDZxpza5s+PwQVx0ZmhLhFixZy+bIdJrHH+F9RAhTAokwYQwKeJ6BN2qamGfz0P/9pFyqH0drcxRsjaAYXt/yl5wuYJAMpgEkCzcuQQCIJqKc3dNgw+e+XXgoJn/MamC5r8+bNNkrPdx7ntvnBIAQSIAH/EsjMzJTG5lU4HRl2lqRx48aSm5vrjOJ2BAEKYAQQ7pKAnwhA+KKJH8rQsWNHO0u0Npf9VK5k2UoBTBZpXocEXCCApm1k81b3MW8gRoHVC6QQFq0ACmBRJowhgUAQwOJJWCMkJycnEOVxoxAUQDeoMk8S8AABeIJ4HObUqVPWGnqARSuFAliUCWNIwPcEVOy6dOkily5d8n153CoABdAtssyXBDxAAM8CHjt2zFqCZwQZwgmQSDgP7pFAoAjgWcCdO3dKXl6eLZd6hoEqZByFoQDGAY9JScDrBCCAED8MhjAUJUABLMqEMSQQGAJ4Ja5evXqhfkB6gOFVSwEM58E9EggEAX0WEALYvn37sAXVA1HABBWCApggkMyGBLxGAGsII9xkXpXT2aFVGL1ma6rsoQCmijyvSwJJIpBmZorWxdIpgOHQKYDhPLhHAoEjUMUMhOjrcIErXJwFogDGCZDJScDrBNAPePbsWSkoKLCmciDkeo1RAK+z4BYJBIqANncxPT76A1UAA1XIOAtDAYwTIJOTgNcJYJ1gPA9IASxaUxTAokwYQwKBIKAeIJbPxNRYbPoWrVYKYFEmjCGBQBGA94eF0q9evRqociWiMBTARFBkHiTgcQKYEUanxfK4qUk1jwKYVNy8GAmkhgCav2fOnEnNxT18VQqghyuHppFAoghAADkvYFGaFMCiTBhDAoEhoAMfmB4f64MwhBOgAIbz4B4JBJIARoTz8/MDWbZ4CkUBjIce05KAjwjoYzE+Mtl1UymAriPmBUiABLxKgALo1ZqhXSRAAq4ToAC6jpgXIAES8CoBCqBXa4Z2kUCCCeiIcIKz9XV2FEBfVx+NJ4HSEcBsMJgWiyGcAAUwnAf3SCBQBHTklwIYvVopgNG5MJYEAkUAQoh5ARnCCVAAw3lwjwQCSSAjI8MujxnIwsVRKApgHPCYlAT8QAAToWIqLEyJxRBOgAIYzoN7JBAYAjrqi2mwTp48KdofGJgCJqAgFMAEQGQWJOBlAlgT+Ny5c5JulsdkCCdAAQznwT0SCAwB9QAxD2CVKlUEM8IwhBOgAIbz4B4JBI4A5gHMysqSihULb3c2ha9XMQXwOgtukUAgCaD5m52dbcumXmEgCxpDoSiAMUBjEhLwOgEIHTw+jP5u27ZNGjZsaE2mAIbXHAUwnAf3SCBQBPLy8mTPnj22DxAFY/M3vHopgOE8uEcCgSJw4cIFadGihWRmZgaqXIkqDAUwUSSZDwl4kMCuXbukc+fOgrWB8T4wPcDwSqIAhvPgHgkEgoAK3apVq/gKXAk1SgEsAQ4PkYAfCehABx5/wTvAHTp0sMVQUfRjmdyymQLoFlnmSwIpJvDLL79IpUqVQh4gBbBohVAAizJhDAkEgsD27dulR48etizqFQaiYAksBAUwgTCZFQmkmgCEDp4eJj/YsmWLdOvWLdUmefr6FEBPVw+NI4HYCMD7a9++vdSuXdtmwOZvdI4UwOhcGEsCviOg3t+VK1dk4cKFMmDAAFsGPP7CEJ0ABTA6F8aSgG8J4NW3Bg0aSJs2bWwZdBIE3xbIRcMpgC7CZdYkkEwCaObC21uwYIEMHjzY9gVy8KPkGqAAlsyHR0nAFwS0mbtmzRq7+JEOfrDvr+TqowCWzIdHScDzBODloZl7/vx5mT17towYMcLaTO/vxlVHAbwxI55BAp4moF7evHnzZNCgQdK8eXPRARFPG+4B4yiAHqgEmkACsRLQpu/GjRtlx44dMmzYsFizKpfpKIDlstpZ6CAQgPih6ZuTkyMzZsyQl156yb77i3j1CoNQTjfLQAF0ky7zJgGXCKj4od9v+vTp8sILL0jTpk1t05ePvZQeOgWw9Kx4Jgl4goCKHyY7nTr1LfvIS/fu3dnvF0PtUABjgMYkJJAqAip+Fy9elClTpkivXj1lyJAhqTLH99flSsm+r0IWoDwQ0FFdNG8PHTok06ZNk6FDh1rvD+XX4+WBRSLLSAFMJE3mRQIJJgBhw0f79TDD8yeffCJjx44Nm+qKgx6xgacAxsaNqUjAVQJO4YO4nT59WubMmWOnuZo8ebI0atTICiOMoPjFXhUUwNjZMSUJJJyA9vFB1PDBtPYrV66U+fPn2ybv888/b6/JJm9i0FMAE8ORuZBAmQlAxDRoM1ebuufOnZO1a9fKkiVL7KwuGPCoX7++PZ3ip9Ti/6YAxs+QOZBAiQQihQ4nQ+icTVdsYx6/w4cPy7p162TTpk12QlN4fM2aNbP5az7OdCVemAdvSCBhAgjXnRVzQ948oZwRwD3hvC+c2wUFBZKfny+7d+8WzOF39OhROX78uAwcOFAmTpwYWswIyOj1ufOHE5cAOitFXXd3zGSuJOBfAmjOoi8PDy7j+T28vbF37167ZkfdunXttPUY1Bg9erRkZmZKWlqaLazT43MKp39JeM/yuAQQS+6dPXtWli9fLidOnLBL8Gmlea+otIgEkkdAm7h5eXmSm5srEEHcG02aNJHs7Gxp3bq1dOnSRbKysqRGjRphhuk9RNELw+LKTlwCCBe+cuXKduFl/LrRC3SljpipzwhAwKpXr26FDfcEPDp80tPT7f0SKWwqeFrMyOMaz+/EE4hLANHvh5Xn8WvGQAIkUDoCEDwVPYgdBa903Nw4Ky4BRMWhIvXbDQOZJwkEiYAKHkXPG7UalwA6i8AKddLgNgmQgB8IcDYYP9QSbSQBEnCFAAXQFazMlARIwA8EKIB+qCXaSAIk4AoBCqArWJkpCZCAHwhQAP1QS7SRBEjAFQIUQFewMlMSIAE/EKAA+qGWaCMJkIArBCiArmBlpiRAAn4gQAH0Qy3RRhIgAVcIUABdwcpMSYAE/EAgrlfh9KVuvgvsh6qmjSQQEALXVhLQCSXiKVVcAoj5AHUKLL4LHE81MC0JkEBpCVRIq2BPxUxU8YYyC6DO/gLBw0SPmMIbc51xSvx4q4LpSYAESkMAWoP5FnNycuxcpEijulSa9M5zyiyA6unB++vYsaN8/fXXdk7ARLijTsO4TQIkQALFEYAOYTJmXSlPdam484uLr2CE6/rafMWdxXgSIAES8CiBWL0/FOf/ATHahyXzxGjUAAAAAElFTkSuQmCC";
__base64Images["/org/opensourcephysics/resources/controls/images/play.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMsWLrcPkHIAYBTUIzbBrXcMghhF01l9pUFyBbbiwUxm2n2iXL3ytMVW1BWSgAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["/org/opensourcephysics/resources/controls/images/stepback.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAM4WLrcPCIOUEYQ1NlZb3YVBWGgMpjD2VgXZ5Ga4Hplbd+oGATfws4w006iC/qIHeMD2HNkAFCcIwEAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["/org/opensourcephysics/resources/controls/images/reset.gif"]="data:image/gif;base64,R0lGODlhEAAQAIcAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///87OzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAANgALAAAAAAQABAAAAheALEJHMhioMGDAq8URIiQhaCFDAleeRhR4kQWGDMeZHGl48OOICEK5HgxI0aFGy9eW7nSoUhsLq8ZjLmRhUyCD2/O1AkzJ0OeNE0KPWlzJMijIXUOFcoTG8unLA0GBAA7";
