import shutil
import requests
from random import choice
from string import ascii_letters, digits
from time import time
import argparse

URL = 'https://thispersondoesnotexist.com/'


def random_filename():
    return ''.join([choice(ascii_letters + digits) for i in range(6)])


def fetch(num_of_images=1):
    for _ in range(num_of_images):
        response = requests.get(URL, stream=True)
        if response.status_code == 200:
            binary = (response.content)
            with open(f'images/{random_filename()}.jpg', 'wb') as file:
                file.write(binary)


def main():
    parser = argparse.ArgumentParser(
        description='Get some images of non-existent people')
    parser.add_argument('num_of_images', metavar='N',
                        type='int', help='number of images wanted')
    parser.add_argument('-f')


start = time()
if __name__ == '__main__':
    fetch()
end = time()
print(f'Total time to get 1000 images: {end - start}')
