copy build\.gitattributes temp
IF NOT EXIST temp\.git mkdir temp\.git
copy build\.git\* temp\.git\