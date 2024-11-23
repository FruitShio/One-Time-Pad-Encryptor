# One-Time-Pad-Encryptor
用于便捷加密和解密。
**一次性密码本**（one-time pad，缩写为OTP）是古典密码学中的一种加密算法。
它是已知的唯一不可破译的加密法，原理为加密者和解密者需要拥有相同的“随机密钥本”，这个密钥只使用一次，且必须随机。因为它随机且独一无二，所以即使最聪明的破译者也无法通过常规数学方法解密。
点击直接使用：https://fruitshio.github.io/One-Time-Pad-Encryptor/
## 使用方法
**（注：密钥必须和明文/密文等长）**
* 共有明文（Plaintext）、密钥（Key）、密文（Ciphertext）三个文本框，和加密（Encrypt）、解密（Decrypt）、生成随机密钥（Generate Random Key）三个按钮。
* 输入明文，点击生成随机密钥，点击加密，即可生成密文。
* 输入密文和密钥，点击解密，即可生成明文。
## 加密原理
将字母和数字一一对应。（A=0、B=1、C=2……Z=25）
### 加密
1. 将明文转换为数字。
例如：HELLO（H=7、E=4、L=11、L=11、O=14）
2. 随机乱想几个字母作为密钥,并转换为数字。（**重点：必须和明文等长**）
例如：XMCKL（X=23、M=12、 C=2、K=10、L=11）
3. 将明文和密钥数字相加。（超出25后从0开始计数）
- H (7) + X (23) = 30 → 4 (即 E)
- E (4) + M (12) = 16 (即 Q)
- L (11) + C (2) = 13 (即 N)
- L (11) + K (10) = 21 (即 V)
- O (14) + L (11) = 25 (即 Z)
计算结果即为加密后的密文：EQNVZ。
### 解密
同上，只需将密文对应数字减去密钥对应数字，得出明文对应数字，再转换为字母即可解出明文。
（注：相减时若密文数字＜密钥数字，则需先+26，再-密钥数字）
例：密文EQNVZ，密钥XMCKL
E(4)＜X(23)，则需4+26-23=7，得出明文H(7)。
若密文≥密钥，直接相减即可。
Z(25)-L(11)，只需25-11=14，得出明文O(14)。

此代码由Claude生成，使用ChatGPT转为HTML+JavaScript版本。
