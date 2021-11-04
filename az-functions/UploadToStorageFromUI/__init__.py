import logging
import os
from azure.storage.blob import BlobServiceClient
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    logging.info(req)
    for input_file in req.files.values():
        filename = input_file.filename
        contents = input_file.stream.read()

        logging.info('Filename: %s' % filename)
        logging.info('Contents:')
        # logging.info(contents)

        res = upload_image(filename, contents)
        print(f"This is the result type: {type(res)} and this is the content of the results {res}")

    return func.HttpResponse(str(res))
 
def upload_image(file_name, data):
    MY_CONNECTION_STRING = os.environ['BLOB_STORAGE_CONNECTION_STRING']
 
    # Replace with blob container. This should be already created in azure storage.
    MY_UPLOAD_CONTAINER = os.environ['BLOB_STORAGE_TARGET_CONTAINER']

    # Create blob with same name as local file name
    try: 
        blob_service_client = BlobServiceClient.from_connection_string(MY_CONNECTION_STRING)
        blob_client = blob_service_client.get_blob_client(container=MY_UPLOAD_CONTAINER, blob=file_name)
        result = blob_client.upload_blob(data, overwrite=True)

    except Exception as e:
        result ="I Failed to upload the blob."
        pass
    return result
