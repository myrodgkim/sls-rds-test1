DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `proc_test`()
BEGIN

    CALL mysql.lambda_async(
            "arn:aws:lambda:ap-northeast-2:ACCOUNT_NUMBER:function:sls-rds-test1-dev-hello",
            CONCAT('{"dt" : "', NOW(),'}')
        );

END;;
DELIMITER ;
