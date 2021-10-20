#
# Makefile
# veypi, 2021-10-20 17:31
#

version:
	@awk -F '"' '/version/ {print $$4;}' package.json

# 提交版本
tag:
	@awk -F '"' '/Version/ {print $$4;system("git tag "$$4);system("git push origin "$$4)}' package.json

# 删除远端版本 慎用
dropTag:
	@awk -F '"' '/Version/ {print $$4;system("git tag -d "$$4);system("git push origin :refs/tags/"$$4)}' package.json
