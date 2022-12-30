from hashlib import sha512

def hash(password):
    return sha512( password.encode("utf-8") ).hexdigest()